'use client';

import React, { useState, useMemo } from 'react';
import {
  LogIn,
  Home,
  Calendar,
  FileText,
  Clock,
  CalendarOff,
  Wallet,
  CreditCard,
  CalendarClock,
  Smartphone,
  Users,
  Settings,
  ChevronRight,
  ChevronDown,
  Search,
  Tag,
  ExternalLink,
  BookOpen,
} from 'lucide-react';
import { guideSections, guideTopics, getChildTopics, GuideTopic, GuideSection } from '@/data/guide-database';
import { clsx } from 'clsx';

// Icon mapping
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  LogIn,
  Home,
  Calendar,
  FileText,
  Clock,
  CalendarOff,
  Wallet,
  CreditCard,
  CalendarClock,
  Smartphone,
  Users,
  Settings,
};

// ============================================
// Main Topic Browser Component
// ============================================

export function TopicBrowser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['login', 'requests']);
  const [selectedTopic, setSelectedTopic] = useState<GuideTopic | null>(null);

  // Filter topics based on search
  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return null;
    
    const query = searchQuery.toLowerCase();
    return guideTopics.filter((topic) => {
      const searchText = [
        topic.title,
        topic.titleNo,
        topic.description,
        topic.descriptionNo,
        ...topic.tags,
      ].join(' ').toLowerCase();
      return searchText.includes(query);
    });
  }, [searchQuery]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Get topics for a section
  const getTopicsForSection = (sectionId: string): GuideTopic[] => {
    const sectionMapping: Record<string, string[]> = {
      login: ['login-main', 'login-remote', 'login-2fa', 'login-password'],
      startpage: ['startpage-main', 'profile', 'elearning', 'reminders'],
      calendar: ['calendar-main', 'calendar-ical'],
      requests: ['requests-main'],
      time: ['time-log', 'time-registration', 'time-flextime', 'time-yearwork'],
      absence: ['absence-main', 'absence-vacation'],
      banks: ['banks-main'],
      salary: ['salary-payslips', 'salary-overview', 'salary-supplements', 'salary-distributions'],
      shifts: ['shifts-book', 'shifts-exchanges', 'shifts-availability', 'shifts-weekschedule', 'shifts-wishplan', 'shifts-shifted', 'shifts-callouts'],
      mobile: ['mobile-apps', 'mobile-gatgo-setup'],
      leader: ['leader-dashboard', 'leader-absence', 'leader-shiftbook'],
      system: ['system-employments', 'system-competence', 'system-surveys', 'system-listviews', 'system-privacy', 'system-logging', 'dept-tasks', 'dept-weekview', 'dept-duties', 'dept-workplans', 'dept-namelist', 'dept-shiftcodes', 'dept-sms', 'dept-reports'],
    };

    const topicIds = sectionMapping[sectionId] || [];
    return topicIds
      .map((id) => guideTopics.find((t) => t.id === id))
      .filter((t): t is GuideTopic => t !== undefined);
  };

  return (
    <div className="flex h-full">
      {/* Sidebar Navigation */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Søk i emner..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Topics List */}
        <div className="flex-1 overflow-y-auto">
          {filteredTopics ? (
            // Search Results
            <div className="p-4">
              <p className="text-sm text-gray-500 mb-3">
                {filteredTopics.length} resultater for "{searchQuery}"
              </p>
              <div className="space-y-1">
                {filteredTopics.map((topic) => (
                  <TopicItem
                    key={topic.id}
                    topic={topic}
                    isSelected={selectedTopic?.id === topic.id}
                    onClick={() => setSelectedTopic(topic)}
                    indent={0}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Section Tree
            <div className="py-2">
              {guideSections.map((section) => {
                const Icon = iconMap[section.icon] || FileText;
                const isExpanded = expandedSections.includes(section.id);
                const topics = getTopicsForSection(section.id);

                return (
                  <div key={section.id}>
                    {/* Section Header */}
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${section.color}15` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: section.color }} />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium text-gray-900 text-sm">{section.titleNo}</p>
                        <p className="text-xs text-gray-500">{topics.length} emner</p>
                      </div>
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </button>

                    {/* Section Topics */}
                    {isExpanded && (
                      <div className="pb-2">
                        {topics.map((topic) => (
                          <TopicTreeItem
                            key={topic.id}
                            topic={topic}
                            selectedId={selectedTopic?.id}
                            onSelect={setSelectedTopic}
                            indent={1}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 bg-gray-50 overflow-y-auto">
        {selectedTopic ? (
          <TopicDetail topic={selectedTopic} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Velg et emne fra menyen</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// Topic Tree Item (with children support)
// ============================================

interface TopicTreeItemProps {
  topic: GuideTopic;
  selectedId: string | undefined;
  onSelect: (topic: GuideTopic) => void;
  indent: number;
}

function TopicTreeItem({ topic, selectedId, onSelect, indent }: TopicTreeItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const children = getChildTopics(topic.id);
  const hasChildren = children.length > 0;

  return (
    <>
      <button
        onClick={() => {
          onSelect(topic);
          if (hasChildren) setIsExpanded(!isExpanded);
        }}
        className={clsx(
          'w-full px-4 py-2 flex items-center gap-2 text-sm transition-colors',
          selectedId === topic.id
            ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
            : 'text-gray-700 hover:bg-gray-50'
        )}
        style={{ paddingLeft: `${indent * 16 + 16}px` }}
      >
        {hasChildren && (
          <span className="w-4 h-4 flex items-center justify-center">
            {isExpanded ? (
              <ChevronDown className="w-3 h-3" />
            ) : (
              <ChevronRight className="w-3 h-3" />
            )}
          </span>
        )}
        <span className="flex-1 text-left truncate">{topic.titleNo}</span>
      </button>

      {isExpanded && children.map((child) => (
        <TopicTreeItem
          key={child.id}
          topic={child}
          selectedId={selectedId}
          onSelect={onSelect}
          indent={indent + 1}
        />
      ))}
    </>
  );
}

// ============================================
// Simple Topic Item (for search results)
// ============================================

interface TopicItemProps {
  topic: GuideTopic;
  isSelected: boolean;
  onClick: () => void;
  indent: number;
}

function TopicItem({ topic, isSelected, onClick, indent }: TopicItemProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-full px-3 py-2 rounded-lg flex items-center gap-2 text-sm transition-colors text-left',
        isSelected
          ? 'bg-blue-50 text-blue-700'
          : 'text-gray-700 hover:bg-gray-100'
      )}
      style={{ paddingLeft: `${indent * 12 + 12}px` }}
    >
      <span className="truncate">{topic.titleNo}</span>
    </button>
  );
}

// ============================================
// Topic Detail View
// ============================================

interface TopicDetailProps {
  topic: GuideTopic;
}

function TopicDetail({ topic }: TopicDetailProps) {
  const children = getChildTopics(topic.id);

  return (
    <div className="max-w-3xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span className={clsx(
            'px-2 py-0.5 rounded text-xs font-medium',
            topic.interface === 'mingat' ? 'bg-blue-100 text-blue-700' :
            topic.interface === 'gatgo' ? 'bg-green-100 text-green-700' :
            'bg-gray-100 text-gray-700'
          )}>
            {topic.interface === 'all' ? 'Alle' : topic.interface.toUpperCase()}
          </span>
          <span className={clsx(
            'px-2 py-0.5 rounded text-xs font-medium',
            topic.role === 'leader' ? 'bg-purple-100 text-purple-700' :
            topic.role === 'employee' ? 'bg-cyan-100 text-cyan-700' :
            'bg-gray-100 text-gray-700'
          )}>
            {topic.role === 'leader' ? 'Leder' : topic.role === 'employee' ? 'Ansatt' : 'Alle'}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">{topic.titleNo}</h1>
        <p className="text-lg text-gray-600">{topic.descriptionNo || topic.description}</p>

        {topic.helpUrl && (
          <a
            href={`https://mingat.helsenord.no/MinGat/help/${topic.helpUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-4 text-sm text-blue-600 hover:text-blue-700"
          >
            <ExternalLink className="w-4 h-4" />
            Se original hjelp
          </a>
        )}
      </div>

      {/* Tags */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Søkeord / Tags
        </h2>
        <div className="flex flex-wrap gap-2">
          {topic.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Child Topics */}
      {children.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Underemner
          </h2>
          <div className="grid gap-3">
            {children.map((child) => (
              <div
                key={child.id}
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
              >
                <h3 className="font-medium text-gray-900">{child.titleNo}</h3>
                {child.descriptionNo && (
                  <p className="text-sm text-gray-600 mt-1">{child.descriptionNo}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Guide Content Placeholder */}
      <div className="p-8 bg-white rounded-xl border-2 border-dashed border-gray-300 text-center">
        <BookOpen className="w-12 h-12 mx-auto mb-4 text-gray-300" />
        <h3 className="font-semibold text-gray-900 mb-2">Veiledningsinnhold</h3>
        <p className="text-gray-500 text-sm mb-4">
          Her vil den detaljerte veiledningen for "{topic.titleNo}" vises.
        </p>
        <code className="text-xs bg-gray-100 px-2 py-1 rounded">
          guide-id: {topic.id}
        </code>
      </div>

      {/* Metadata */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          Metadata
        </h2>
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-gray-500">ID</dt>
            <dd className="font-mono text-gray-900">{topic.id}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Slug</dt>
            <dd className="font-mono text-gray-900">{topic.slug}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Grensesnitt</dt>
            <dd className="text-gray-900">{topic.interface}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Rolle</dt>
            <dd className="text-gray-900">{topic.role}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default TopicBrowser;
