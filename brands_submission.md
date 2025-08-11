# Brands Repository Submission Guide

Voor de brands validation moet je de volgende structuur maken in de home-assistant/brands repository:

## Folder structuur:
```
custom_integrations/melcloud_fixed/
├── _integration
├── icon.png
└── icon@2x.png
```

## Bestand: custom_integrations/melcloud_fixed/_integration

```json
{
  "domain": "melcloud_fixed",
  "name": "MELCloud with Swing Fix",
  "documentation": "https://github.com/brouwerict/ha-melcloud-swing-fix",
  "issue_tracker": "https://github.com/brouwerict/ha-melcloud-swing-fix/issues",
  "iot_class": "cloud_polling"
}
```

## Icon requirements:
- icon.png: 256x256 pixels
- icon@2x.png: 512x512 pixels
- PNG format met transparante achtergrond
- Gebruik het MELCloud logo of maak een eigen variant

## Stappen:

1. Fork https://github.com/home-assistant/brands
2. Clone je fork:
   ```bash
   git clone https://github.com/[jouw-username]/brands.git
   cd brands
   ```

3. Maak de folder structuur:
   ```bash
   mkdir -p custom_integrations/melcloud_fixed
   ```

4. Voeg de _integration file toe met bovenstaande content

5. Voeg de icon bestanden toe (je kunt het originele MELCloud logo gebruiken)

6. Commit en push:
   ```bash
   git add custom_integrations/melcloud_fixed/
   git commit -m "Add melcloud_fixed custom integration"
   git push origin main
   ```

7. Maak een Pull Request van je fork naar home-assistant/brands

## Alternatief: Skip de brands validation

Als je niet wilt wachten op goedkeuring van de PR, kun je deze validatie ook gewoon negeren. 
De integratie werkt prima zonder brands validation - het is alleen een "nice to have" voor officiële herkenning.

De brands validation is vooral belangrijk voor integraties die in de officiële Home Assistant core willen komen.
Voor een HACS custom integration is het optioneel.