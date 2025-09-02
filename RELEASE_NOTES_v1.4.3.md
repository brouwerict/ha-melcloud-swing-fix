# MELCloud with Swing Fix v1.4.3 - Dependency Security Update

## 🔧 Dependency Update

This release switches from the unmaintained `pymelcloud` package to the actively maintained `python-melcloud` package, ensuring better security and compatibility.

### What Changed

- **Updated dependency**: Replaced `pymelcloud==2.5.9` with `python-melcloud==0.1.0`
- **Improved security**: Now uses the same maintained package as the official Home Assistant MELCloud integration
- **Better compatibility**: Aligned with Home Assistant's official package choices
- **No breaking changes**: All functionality remains exactly the same

### Technical Details

The integration now uses `python-melcloud==0.1.0` instead of the unmaintained `pymelcloud==2.5.9`. This change ensures:

- ✅ Active maintenance and security updates
- ✅ Compatibility with official Home Assistant standards
- ✅ Reduced security vulnerabilities from unmaintained dependencies
- ✅ Future-proofing against deprecated packages

### Installation

Simply update through HACS or reinstall the integration - all existing configurations will continue to work without any changes required.

## 🙏 Acknowledgments

Special thanks to **@javydekoning** for pointing out the unmaintained dependency issue and suggesting the switch to the maintained `python-melcloud` package.

## 📋 Previous Features (Still Available)

- Complete swing/vane position control for Mitsubishi Electric MELCloud devices
- Smart fallback system for unsupported swing modes
- Fixed horizontal/vertical swing issues present in Home Assistant 2025.5.x
- Full compatibility with HACS installation
- Professional icon integration

## 🔗 Links

- [GitHub Repository](https://github.com/brouwerict/ha-melcloud-swing-fix)
- [Report Issues](https://github.com/brouwerict/ha-melcloud-swing-fix/issues)
- [HACS Integration](https://hacs.xyz/)

## 💻 For Developers

This release demonstrates best practices for custom integration maintenance:
- Regular dependency auditing
- Security-first approach to package management
- Alignment with Home Assistant official standards
- Community-driven improvements

---

**Full Changelog**: v1.4.2...v1.4.3