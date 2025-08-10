# 🚀 MELCloud with Swing Fix

A **complete fix** for the Home Assistant MELCloud integration that provides **perfect swing/vane control** for Mitsubishi air conditioners.

## 🎯 Features
- ✅ **ALL vertical swing positions working** (auto, 1-5, swing)
- ✅ **ALL horizontal swing positions working** 
- ✅ **Perfect vane position control** with real device values
- ✅ **Complete original MELCloud functionality** preserved
- ✅ **Smart fallback system** for devices without position feedback
- ✅ **Reverse-engineered device compatibility** for accurate control

## 🔧 What's Fixed
The original MELCloud integration had **broken swing positions** where positions 1 and 5 would show "invalid position" errors. 

**Root Cause Discovered:** Mitsubishi devices use specific position strings:
- Position 1 = `1_up` (not `1`)
- Position 5 = `5_down` (not `5`)

**Solution:** Complete mapping of real device values through reverse engineering.

## 📋 Complete Position Support
- ✅ **Auto mode** → `auto`
- ✅ **Position 1** → `1_up` (upward angle)
- ✅ **Position 2** → `2` (standard)
- ✅ **Position 3** → `3` (standard)
- ✅ **Position 4** → `4` (standard)  
- ✅ **Position 5** → `5_down` (downward angle)
- ✅ **Swing mode** → `swing` (continuous movement)

## 🚀 Installation

### Via HACS (Recommended)
1. Open HACS in Home Assistant
2. Go to **Integrations**
3. Click **menu (⋮)** → **Custom repositories**
4. Add: `https://github.com/brouwerict/ha-melcloud-swing-fix`
5. Category: **Integration**
6. Click **Add**
7. Search for **"MELCloud with Swing Fix"**
8. **Install** the integration
9. **Restart Home Assistant**
10. Remove original MELCloud integration if present
11. Add **MELCloud Fixed** integration in Settings → Integrations

### Manual Installation
Copy the `custom_components/melcloud_fixed` folder to your Home Assistant `config/custom_components/` directory and restart.

## ⚙️ Configuration
Use the **same MELCloud credentials** as the official integration. No additional configuration needed!

## 🎉 What You Get
- **Perfect swing control** - All positions work flawlessly
- **Reliable operation** - No more "invalid position" errors
- **Future-proof** - Based on actual device values, not guesswork
- **Drop-in replacement** - Same interface as official integration

## 🔍 Technical Details
This fix was achieved through:
1. **Reverse engineering** MELCloud device communication
2. **Real device testing** to discover actual position strings
3. **Proper fallback mapping** for devices without API position feedback
4. **Extensive validation** of all swing positions

## 📖 Version History
- **v1.3.0** - 🎉 Complete swing fix with all positions working
- **v1.2.x** - Debug and testing versions
- **v1.1.0** - HACS compatibility improvements  
- **v1.0.0** - Initial swing fix attempt

## 🙏 Credits
- Based on the official Home Assistant MELCloud integration
- Solved through collaborative testing and reverse engineering
- Special thanks to the Home Assistant community

## 🐛 Issues?
Report issues at: https://github.com/brouwerict/ha-melcloud-swing-fix/issues

---
**Enjoy perfect vane control for your Mitsubishi air conditioner!** 🌊✨