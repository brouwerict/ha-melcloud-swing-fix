# MELCloud with Swing Fix

This is a fixed version of the Home Assistant MELCloud integration that properly supports swing/vane control for Mitsubishi air conditioners.

## Features
- ✅ Fixed vertical swing modes
- ✅ Fixed horizontal swing modes  
- ✅ All original MELCloud functionality
- ✅ Proper fallback for devices without position feedback

## Installation

### Via HACS (Recommended)
1. Open HACS
2. Go to Integrations
3. Click menu (3 dots top right) → Custom repositories
4. Add: `https://github.com/[USERNAME]/ha-melcloud-swing-fix`
5. Category: Integration
6. Click Add
7. Search for "MELCloud with Swing Fix"
8. Install
9. Restart Home Assistant
10. Remove original MELCloud integration if present
11. Add MELCloud Fixed integration in Settings → Integrations

### Manual
Copy the `custom_components/melcloud_fixed` folder to your Home Assistant `config/custom_components/` directory.

## Configuration
Use the same credentials as the official MELCloud integration.

## Changes from Original
- Added fallback swing positions when API doesn't provide them
- Always enable swing support when vane data is present
- Fixed empty swing_modes array issue

## Credits
Based on the official Home Assistant MELCloud integration.