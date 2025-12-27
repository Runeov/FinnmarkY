'use client';

import React, { useState } from 'react';
import { 
  Wifi, 
  Lock, 
  Check, 
  X, 
  AlertCircle, 
  Eye, 
  EyeOff,
  Home,
  Monitor,
  Shield,
  ExternalLink,
  ChevronRight,
  Download
} from 'lucide-react';

/**
 * Interactive Components for MinGat Home Access Setup Guide
 * 
 * Replaces static images with interactive demos for:
 * - VPN connection
 * - Login process
 * - Connection status
 */

// ============================================================================
// 1. VPN CONNECTION COMPONENT
// ============================================================================

interface VPNConnectionProps {
  highlightedElement?: string;
  onElementClick?: (elementId: string) => void;
}

export function VPNConnection({ 
  highlightedElement,
  onElementClick 
}: VPNConnectionProps = {}) {
  
  const [vpnStatus, setVpnStatus] = useState<'disconnected' | 'connecting' | 'connected'>('disconnected');
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  
  const isHighlighted = (id: string) => highlightedElement === id;
  
  const handleConnect = () => {
    if (credentials.username && credentials.password) {
      setVpnStatus('connecting');
      onElementClick?.('vpn-connect');
      
      setTimeout(() => {
        setVpnStatus('connected');
      }, 2000);
    }
  };
  
  const handleDisconnect = () => {
    setVpnStatus('disconnected');
    onElementClick?.('vpn-disconnect');
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3">
        <h3 className="font-semibold flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Steg 1: Koble til VPN
        </h3>
      </div>
      
      {/* Status Banner */}
      {vpnStatus === 'connected' && (
        <div className="bg-green-50 border-b border-green-200 px-4 py-3 flex items-center gap-2 text-green-800">
          <Check className="w-5 h-5" />
          <span className="text-sm font-medium">Tilkoblet sikker VPN-forbindelse</span>
        </div>
      )}
      
      {vpnStatus === 'connecting' && (
        <div className="bg-blue-50 border-b border-blue-200 px-4 py-3 flex items-center gap-2 text-blue-800">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-800"></div>
          <span className="text-sm font-medium">Kobler til...</span>
        </div>
      )}
      
      <div className="p-4 space-y-4">
        {/* Status Indicator */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              vpnStatus === 'connected' ? 'bg-green-500 animate-pulse' :
              vpnStatus === 'connecting' ? 'bg-yellow-500 animate-pulse' :
              'bg-gray-400'
            }`} />
            <span className="text-sm font-medium text-gray-700">
              {vpnStatus === 'connected' ? 'Tilkoblet' :
               vpnStatus === 'connecting' ? 'Kobler til...' :
               'Frakoblet'}
            </span>
          </div>
          <Wifi className={`w-5 h-5 ${
            vpnStatus === 'connected' ? 'text-green-600' :
            vpnStatus === 'connecting' ? 'text-yellow-600' :
            'text-gray-400'
          }`} />
        </div>
        
        {/* Credentials Form */}
        {vpnStatus !== 'connected' && (
          <>
            <div className={`space-y-2 ${isHighlighted('vpn-username') ? 'ring-2 ring-blue-400 ring-offset-2 rounded-lg p-2' : ''}`}>
              <label className="block text-sm font-medium text-gray-700">
                Brukernavn
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => {
                  setCredentials({...credentials, username: e.target.value});
                  onElementClick?.('vpn-username');
                }}
                placeholder="BRUKERNAVN"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 uppercase"
              />
            </div>
            
            <div className={`space-y-2 ${isHighlighted('vpn-password') ? 'ring-2 ring-blue-400 ring-offset-2 rounded-lg p-2' : ''}`}>
              <label className="block text-sm font-medium text-gray-700">
                Passord
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => {
                    setCredentials({...credentials, password: e.target.value});
                    onElementClick?.('vpn-password');
                  }}
                  placeholder="Skriv inn passord"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 text-gray-500" /> : <Eye className="w-4 h-4 text-gray-500" />}
                </button>
              </div>
            </div>
            
            <button
              onClick={handleConnect}
              disabled={!credentials.username || !credentials.password || vpnStatus === 'connecting'}
              className={`
                w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2
                ${credentials.username && credentials.password && vpnStatus !== 'connecting'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
                ${isHighlighted('vpn-connect') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}
              `}
            >
              {vpnStatus === 'connecting' ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Kobler til...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Koble til VPN
                </>
              )}
            </button>
          </>
        )}
        
        {/* Connected State */}
        {vpnStatus === 'connected' && (
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="font-medium text-green-900">VPN-tilkobling aktiv</span>
              </div>
              <p className="text-sm text-green-700">
                Du er nå trygt koblet til sykehuset sitt nettverk hjemmefra.
              </p>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">Server:</span>
                <span className="font-medium">vpn.sykehusnavn.no</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <span className="text-gray-600">IP-adresse:</span>
                <span className="font-medium">10.xxx.xxx.xxx</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-gray-600">Status:</span>
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  Aktiv
                </span>
              </div>
            </div>
            
            <button
              onClick={handleDisconnect}
              className="w-full py-3 rounded-lg font-medium bg-red-600 text-white hover:bg-red-700 transition-colors"
            >
              Koble fra VPN
            </button>
          </div>
        )}
        
        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-800">
            <strong>💡 Viktig:</strong> Du må være tilkoblet VPN for å få tilgang til MinGat hjemmefra. 
            Bruk ditt vanlige Windows-brukernavn og passord.
          </p>
        </div>
      </div>
    </div>
  );
}


// ============================================================================
// 2. MINGAT LOGIN COMPONENT
// ============================================================================

interface MinGatLoginProps {
  highlightedElement?: string;
  onElementClick?: (elementId: string) => void;
}

export function MinGatLogin({ 
  highlightedElement,
  onElementClick 
}: MinGatLoginProps = {}) {
  
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState<'idle' | 'logging-in' | 'success' | 'error'>('idle');
  
  const isHighlighted = (id: string) => highlightedElement === id;
  
  const handleLogin = () => {
    if (loginData.username && loginData.password) {
      setLoginStatus('logging-in');
      onElementClick?.('login-submit');
      
      setTimeout(() => {
        setLoginStatus('success');
      }, 1500);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3">
        <h3 className="font-semibold flex items-center gap-2">
          <Lock className="w-5 h-5" />
          Steg 2: Logg inn på MinGat
        </h3>
      </div>
      
      {/* Success Banner */}
      {loginStatus === 'success' && (
        <div className="bg-green-50 border-b border-green-200 px-4 py-3 flex items-center gap-2 text-green-800">
          <Check className="w-5 h-5" />
          <span className="text-sm font-medium">Innlogging vellykket!</span>
        </div>
      )}
      
      <div className="p-4 space-y-4">
        {/* MinGat Logo Area */}
        <div className="text-center py-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-2">
            <Monitor className="w-8 h-8 text-red-600" />
          </div>
          <h4 className="text-xl font-bold text-gray-900">MinGat</h4>
          <p className="text-sm text-gray-600">Medarbeiderportal</p>
        </div>
        
        {loginStatus !== 'success' ? (
          <>
            {/* Username Input */}
            <div className={`space-y-2 ${isHighlighted('login-username') ? 'ring-2 ring-blue-400 ring-offset-2 rounded-lg p-2' : ''}`}>
              <label className="block text-sm font-medium text-gray-700">
                Brukernavn
              </label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => {
                  setLoginData({...loginData, username: e.target.value});
                  onElementClick?.('login-username');
                }}
                placeholder="BRUKERNAVN"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 uppercase"
              />
            </div>
            
            {/* Password Input */}
            <div className={`space-y-2 ${isHighlighted('login-password') ? 'ring-2 ring-blue-400 ring-offset-2 rounded-lg p-2' : ''}`}>
              <label className="block text-sm font-medium text-gray-700">
                Passord
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => {
                    setLoginData({...loginData, password: e.target.value});
                    onElementClick?.('login-password');
                  }}
                  placeholder="Skriv inn passord"
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 text-gray-500" /> : <Eye className="w-4 h-4 text-gray-500" />}
                </button>
              </div>
            </div>
            
            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={!loginData.username || !loginData.password || loginStatus === 'logging-in'}
              className={`
                w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2
                ${loginData.username && loginData.password && loginStatus !== 'logging-in'
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
                ${isHighlighted('login-submit') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}
              `}
            >
              {loginStatus === 'logging-in' ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Logger inn...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Logg inn
                </>
              )}
            </button>
            
            {/* Help Link */}
            <div className="text-center">
              <a href="#" className="text-sm text-blue-600 hover:underline flex items-center justify-center gap-1">
                <AlertCircle className="w-4 h-4" />
                Glemt passord?
              </a>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <h5 className="font-semibold text-green-900 mb-1">Innlogget!</h5>
              <p className="text-sm text-green-700">
                Du har nå tilgang til MinGat hjemmefra
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between py-2 border-b border-gray-200 text-sm">
                <span className="text-gray-600">Bruker:</span>
                <span className="font-medium">{loginData.username}</span>
              </div>
              <div className="flex items-center justify-between py-2 text-sm">
                <span className="text-gray-600">Tilgang:</span>
                <span className="flex items-center gap-1 text-green-600 font-medium">
                  <Check className="w-4 h-4" />
                  Godkjent
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setLoginStatus('idle')}
              className="w-full py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-300"
            >
              Logg ut
            </button>
          </div>
        )}
        
        {/* Info Box */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="text-xs text-amber-800">
            <strong>⚠️ Merk:</strong> Du må være koblet til VPN først. 
            Bruk samme brukernavn og passord som på jobben.
          </p>
        </div>
      </div>
    </div>
  );
}


// ============================================================================
// 3. CONNECTION STATUS COMPONENT
// ============================================================================

interface ConnectionStatusProps {
  highlightedElement?: string;
  onElementClick?: (elementId: string) => void;
}

export function ConnectionStatus({ 
  highlightedElement,
  onElementClick 
}: ConnectionStatusProps = {}) {
  
  const [checks, setChecks] = useState({
    vpn: false,
    network: false,
    mingat: false
  });
  
  const [testing, setTesting] = useState(false);
  
  const isHighlighted = (id: string) => highlightedElement === id;
  
  const runTests = () => {
    setTesting(true);
    setChecks({ vpn: false, network: false, mingat: false });
    onElementClick?.('run-tests');
    
    setTimeout(() => setChecks(prev => ({ ...prev, vpn: true })), 500);
    setTimeout(() => setChecks(prev => ({ ...prev, network: true })), 1000);
    setTimeout(() => {
      setChecks(prev => ({ ...prev, mingat: true }));
      setTesting(false);
    }, 1500);
  };
  
  const allChecked = checks.vpn && checks.network && checks.mingat;
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3">
        <h3 className="font-semibold flex items-center gap-2">
          <Wifi className="w-5 h-5" />
          Steg 3: Test tilkoblingen
        </h3>
      </div>
      
      {allChecked && (
        <div className="bg-green-50 border-b border-green-200 px-4 py-3 flex items-center gap-2 text-green-800">
          <Check className="w-5 h-5" />
          <span className="text-sm font-medium">Alle tester bestått! Du er klar!</span>
        </div>
      )}
      
      <div className="p-4 space-y-4">
        {/* Test Checklist */}
        <div className="space-y-3">
          {/* VPN Check */}
          <div className={`flex items-center justify-between p-3 rounded-lg border ${
            checks.vpn ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                checks.vpn ? 'bg-green-600' : 'bg-gray-300'
              }`}>
                {checks.vpn ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <div>
                <div className="font-medium text-sm">VPN-tilkobling</div>
                <div className="text-xs text-gray-600">
                  {checks.vpn ? 'Tilkoblet' : 'Venter...'}
                </div>
              </div>
            </div>
            {testing && !checks.vpn && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
            )}
          </div>
          
          {/* Network Check */}
          <div className={`flex items-center justify-between p-3 rounded-lg border ${
            checks.network ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                checks.network ? 'bg-green-600' : 'bg-gray-300'
              }`}>
                {checks.network ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <div>
                <div className="font-medium text-sm">Nettverkstilgang</div>
                <div className="text-xs text-gray-600">
                  {checks.network ? 'OK' : 'Venter...'}
                </div>
              </div>
            </div>
            {testing && checks.vpn && !checks.network && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
            )}
          </div>
          
          {/* MinGat Check */}
          <div className={`flex items-center justify-between p-3 rounded-lg border ${
            checks.mingat ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                checks.mingat ? 'bg-green-600' : 'bg-gray-300'
              }`}>
                {checks.mingat ? (
                  <Check className="w-4 h-4 text-white" />
                ) : (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </div>
              <div>
                <div className="font-medium text-sm">MinGat-tilgang</div>
                <div className="text-xs text-gray-600">
                  {checks.mingat ? 'Tilgjengelig' : 'Venter...'}
                </div>
              </div>
            </div>
            {testing && checks.network && !checks.mingat && (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
            )}
          </div>
        </div>
        
        {/* Test Button */}
        <button
          onClick={runTests}
          disabled={testing}
          className={`
            w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2
            ${testing
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : allChecked
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-blue-600 text-white hover:bg-blue-700'}
            ${isHighlighted('run-tests') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}
          `}
        >
          {testing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Tester tilkobling...
            </>
          ) : allChecked ? (
            <>
              <Check className="w-5 h-5" />
              Test på nytt
            </>
          ) : (
            <>
              <Wifi className="w-5 h-5" />
              Start test
            </>
          )}
        </button>
        
        {/* Success Message */}
        {allChecked && !testing && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h5 className="font-semibold text-green-900 mb-1">Tilkoblingen fungerer!</h5>
                <p className="text-sm text-green-700 mb-2">
                  Du kan nå bruke MinGat hjemmefra. Åpne MinGat i nettleseren din.
                </p>
                <a 
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:text-green-800"
                >
                  Åpne MinGat
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-800">
            <strong>💡 Tips:</strong> Hvis testen feiler, sjekk at du er koblet til VPN 
            og at brukernavn og passord er riktig.
          </p>
        </div>
      </div>
    </div>
  );
}


// ============================================================================
// 4. DOWNLOAD VPN CLIENT COMPONENT
// ============================================================================

interface VPNDownloadProps {
  highlightedElement?: string;
  onElementClick?: (elementId: string) => void;
}

export function VPNDownload({ 
  highlightedElement,
  onElementClick 
}: VPNDownloadProps = {}) {
  
  const [selectedOS, setSelectedOS] = useState<'windows' | 'mac' | 'mobile'>('windows');
  const [downloading, setDownloading] = useState(false);
  
  const isHighlighted = (id: string) => highlightedElement === id;
  
  const handleDownload = () => {
    setDownloading(true);
    onElementClick?.(`download-${selectedOS}`);
    
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 max-w-md mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-3">
        <h3 className="font-semibold flex items-center gap-2">
          <Download className="w-5 h-5" />
          Last ned VPN-klient
        </h3>
      </div>
      
      <div className="p-4 space-y-4">
        {/* OS Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Velg operativsystem
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => {
                setSelectedOS('windows');
                onElementClick?.('select-windows');
              }}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedOS === 'windows'
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              } ${isHighlighted('select-windows') ? 'ring-2 ring-blue-400 ring-offset-2' : ''}`}
            >
              <Monitor className="w-6 h-6 mx-auto mb-1 text-gray-700" />
              <div className="text-xs font-medium">Windows</div>
            </button>
            
            <button
              onClick={() => {
                setSelectedOS('mac');
                onElementClick?.('select-mac');
              }}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedOS === 'mac'
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Monitor className="w-6 h-6 mx-auto mb-1 text-gray-700" />
              <div className="text-xs font-medium">Mac</div>
            </button>
            
            <button
              onClick={() => {
                setSelectedOS('mobile');
                onElementClick?.('select-mobile');
              }}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedOS === 'mobile'
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Home className="w-6 h-6 mx-auto mb-1 text-gray-700" />
              <div className="text-xs font-medium">Mobil</div>
            </button>
          </div>
        </div>
        
        {/* Download Info */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Download className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h5 className="font-medium text-gray-900 mb-1">
                VPN-klient for {
                  selectedOS === 'windows' ? 'Windows' :
                  selectedOS === 'mac' ? 'Mac' :
                  'Mobil (iOS/Android)'
                }
              </h5>
              <p className="text-sm text-gray-600 mb-2">
                {selectedOS === 'windows' && 'Windows 10 eller nyere'}
                {selectedOS === 'mac' && 'macOS 10.15 eller nyere'}
                {selectedOS === 'mobile' && 'iOS 13+ eller Android 8+'}
              </p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span>Versjon: 7.4.2</span>
                <span>Størrelse: 45 MB</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={downloading}
          className={`
            w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2
            ${downloading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-purple-600 text-white hover:bg-purple-700'}
            ${isHighlighted(`download-${selectedOS}`) ? 'ring-2 ring-blue-400 ring-offset-2' : ''}
          `}
        >
          {downloading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Laster ned...
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              Last ned VPN-klient
            </>
          )}
        </button>
        
        {/* Installation Steps */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <h6 className="font-medium text-blue-900 mb-2 text-sm">Etter nedlasting:</h6>
          <ol className="text-xs text-blue-800 space-y-1 list-decimal list-inside">
            <li>Kjør installasjonsfilen</li>
            <li>Følg installasjonsveiviseren</li>
            <li>Start VPN-klienten</li>
            <li>Koble til med ditt brukernavn</li>
          </ol>
        </div>
        
        {/* Help Link */}
        <div className="text-center">
          <a href="#" className="text-sm text-purple-600 hover:underline inline-flex items-center gap-1">
            <AlertCircle className="w-4 h-4" />
            Trenger du hjelp med installasjonen?
          </a>
        </div>
      </div>
    </div>
  );
}


// ============================================================================
// EXPORT ALL
// ============================================================================

/**
 * Usage in guide content:
 * 
 * Replace static images:
 * 
 * <img src="/images/guides/vpn-connection.png" />  →  <VPNConnection />
 * <img src="/images/guides/mingat-login.png" />    →  <MinGatLogin />
 * <img src="/images/guides/connection-test.png" /> →  <ConnectionStatus />
 * <img src="/images/guides/vpn-download.png" />    →  <VPNDownload />
 */