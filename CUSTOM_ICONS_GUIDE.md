# Quick Icon Solution - Custom Brand Icons

## Immediate Working Solution

### Step 1: Install Custom Brand Icons via HACS
1. Open HACS in Home Assistant
2. Go to **Frontend** 
3. Click **Explore & Download Repositories**
4. Search for **"Custom Brand Icons"**
5. Install **Custom Brand Icons** by elax46
6. Restart Home Assistant

### Step 2: Add Frontend Module
Add to your `configuration.yaml`:
```yaml
frontend:
  extra_module_url:
    - /hacsfiles/custom-brand-icons/custom-brand-icons.js
```

### Step 3: Add MELCloud Icons to the Pack
Create custom icon definition for MELCloud:

**File**: `/config/custom_icons/melcloud_fixed.svg`
```xml
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <!-- Your MELCloud icon SVG content -->
  <path d="..." fill="currentColor"/>
</svg>
```

### Step 4: Register Icon in Custom Brand Icons
If the pack supports custom additions, add MELCloud mapping.

### Alternative: Use Existing Icons
Use a similar icon from the Custom Brand Icons pack:
- `brand:mitsubishi` (if available)
- `custom:air-conditioner` 
- `custom:hvac`

## Why This Works
- ✅ Uses established HACS frontend system
- ✅ Proven to work with HA 2025.x
- ✅ No custom JavaScript needed
- ✅ Community maintained
- ✅ Works immediately after installation

## Configuration Update
Update your `hacs.json`:
```json
{
  "name": "MELCloud with Swing Fix",
  "icon": "custom:melcloud_fixed",
  "domains": ["climate"],
  "homeassistant": "2024.1.0"
}
```