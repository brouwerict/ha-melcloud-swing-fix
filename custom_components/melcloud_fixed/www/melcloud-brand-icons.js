/**
 * MELCloud Custom Brand Icons
 * Professional frontend integration for custom icon display
 * Version: 2.0.0
 */

class MelCloudBrandIcons {
  constructor() {
    this.domain = 'melcloud_fixed';
    this.iconUrl = '/local/community/melcloud_fixed/icon.png';
    this.iconUrlHd = '/local/community/melcloud_fixed/icon@2x.png';
    this.initialized = false;
    
    this.init();
  }
  
  /**
   * Initialize the brand icon system
   */
  async init() {
    if (this.initialized) return;
    
    try {
      await this.waitForHomeAssistant();
      await this.injectCustomStyles();
      await this.registerBrandOverrides();
      await this.observeIntegrationChanges();
      
      this.initialized = true;
      console.log('🚀 MELCloud Brand Icons v2.0 initialized successfully');
    } catch (error) {
      console.error('❌ MELCloud Brand Icons failed to initialize:', error);
    }
  }
  
  /**
   * Wait for Home Assistant to be fully loaded
   */
  async waitForHomeAssistant() {
    if (window.customElements) {
      await Promise.all([
        window.customElements.whenDefined('home-assistant'),
        window.customElements.whenDefined('ha-icon'),
        window.customElements.whenDefined('hui-view')
      ]);
    }
    
    // Additional wait for HA to be fully ready
    return new Promise(resolve => {
      const checkReady = () => {
        if (document.querySelector('home-assistant') && 
            document.querySelector('home-assistant').hass) {
          resolve();
        } else {
          setTimeout(checkReady, 100);
        }
      };
      checkReady();
    });
  }
  
  /**
   * Inject custom CSS styles for icon display
   */
  async injectCustomStyles() {
    const styleId = 'melcloud-brand-icons-style';
    
    // Remove existing styles
    const existingStyle = document.getElementById(styleId);
    if (existingStyle) {
      existingStyle.remove();
    }
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      /* MELCloud Integration Icons - Modern CSS Approach */
      
      /* Integration Cards in Settings */
      .config-entry-row[data-domain="${this.domain}"] .config-entry-icon,
      .integration-item[data-domain="${this.domain}"] .integration-icon,
      .config-entry-icon[data-domain="${this.domain}"] {
        background-image: url("${this.iconUrl}") !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        border-radius: 4px;
      }
      
      /* High DPI Displays */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
        .config-entry-row[data-domain="${this.domain}"] .config-entry-icon,
        .integration-item[data-domain="${this.domain}"] .integration-icon,
        .config-entry-icon[data-domain="${this.domain}"] {
          background-image: url("${this.iconUrlHd}") !important;
        }
      }
      
      /* Integration Setup Dialog */
      .integration-icon[data-domain="${this.domain}"],
      .brand-image[data-domain="${this.domain}"] {
        background-image: url("${this.iconUrl}") !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
      }
      
      /* Entity Cards and More Info Dialogs */
      .entity-picture[data-domain="${this.domain}"],
      .state-card-content .entity-picture[data-domain="${this.domain}"] {
        background-image: url("${this.iconUrl}") !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
      }
      
      /* Device Registry Icons */
      .device-entry .device-icon[data-domain="${this.domain}"],
      .device-card .device-icon[data-domain="${this.domain}"] {
        background-image: url("${this.iconUrl}") !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
      }
      
      /* Brand Icon Fallback for Missing Icons */
      ha-icon[icon="mdi:${this.domain}"],
      ha-icon[icon="brand:${this.domain}"] {
        background-image: url("${this.iconUrl}") !important;
        background-size: contain !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
        color: transparent !important;
      }
    `;
    
    document.head.appendChild(style);
    console.log('🎨 MELCloud custom styles injected');
  }
  
  /**
   * Register brand icon overrides
   */
  async registerBrandOverrides() {
    // Override brand icon requests
    if (!window._melcloudBrandOverrideInstalled) {
      const originalFetch = window.fetch;
      window.fetch = async (url, options) => {
        if (typeof url === 'string' && 
            url.includes('brands.home-assistant.io') && 
            url.includes(this.domain)) {
          console.log('🔄 Intercepting brand icon request for MELCloud');
          return originalFetch(this.iconUrl, options);
        }
        return originalFetch(url, options);
      };
      
      window._melcloudBrandOverrideInstalled = true;
      console.log('🌐 Brand icon override registered');
    }
  }
  
  /**
   * Observe DOM changes and apply icons to new elements
   */
  async observeIntegrationChanges() {
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) { // Element node
            // Check for integration-related elements
            if (node.matches && (
              node.matches('.config-entry-row') ||
              node.matches('.integration-item') ||
              node.matches('.device-entry') ||
              node.querySelector('.config-entry-row, .integration-item, .device-entry')
            )) {
              shouldUpdate = true;
            }
          }
        });
      });
      
      if (shouldUpdate) {
        setTimeout(() => this.updateIconElements(), 100);
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    console.log('👀 DOM observer for MELCloud icons active');
  }
  
  /**
   * Update icon elements with data attributes
   */
  updateIconElements() {
    // Add data-domain attributes for CSS targeting
    const selectors = [
      '.config-entry-row',
      '.integration-item', 
      '.device-entry',
      '.integration-icon',
      '.config-entry-icon'
    ];
    
    selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        if (element.textContent && element.textContent.includes('MELCloud')) {
          element.setAttribute('data-domain', this.domain);
        }
      });
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new MelCloudBrandIcons();
  });
} else {
  new MelCloudBrandIcons();
}

// Export for potential external use
window.MelCloudBrandIcons = MelCloudBrandIcons;