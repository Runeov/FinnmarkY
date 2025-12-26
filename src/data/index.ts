export { categories, getCategoryById } from './categories';
export { guides, getGuideById, getGuidesByCategory } from './guides';
export { accessGuides, getAccessGuideById } from './access-guides';
export { supportContacts } from './support';

// New structured database based on MinGat Help
export {
  guideSections,
  guideTopics,
  getTopicById,
  getTopicBySlug,
  getTopicsBySection,
  getChildTopics,
  getRootTopics,
  searchTopics,
} from './guide-database';
export type { GuideTopic, GuideSection } from './guide-database';
