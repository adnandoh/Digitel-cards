# VacationBNA Staff Digital Card

A responsive, accessible digital business card component for VacationBNA staff members. build with HTML, CSS, and following the provided JSON specification.

## Features

- **Pixel-perfect design** matching the JSON specification
- **Responsive layout** with mobile-first approach
- **Accessibility compliant** with ARIA labels and keyboard navigation
- **Interactive elements** with hover effects and focus states
- **Multiple staff examples** demonstrating flexibility
- **Dark mode support** with system preference detection
- **Print-friendly** styles for physical card generation

## Files Structure

```
├── index.html          # Single staff card example
├── examples.html       # Multiple staff cards demonstration
├── styles.css          # Complete CSS styling
├── assets/             # SVG icons and placeholder images
│   ├── profile-icon.svg
│   ├── email-icon.svg
│   ├── phone-icon.svg
│   ├── vacationbna-mark.svg
│   └── website-icon.svg
└── README.md           # This documentation
```

## Usage

### Basic Implementation

1. **Include the CSS file** in your HTML:
```html
<link rel="stylesheet" href="styles.css">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

2. **Use the card structure**:
```html
<div class="staff-card" role="group" aria-label="Staff contact card">
    <div class="top-panel">
        <div class="avatar-container">
            <img src="assets/avatar-placeholder.png" alt="Staff avatar" class="avatar">
        </div>
        <div class="brand-mark">
            <!-- VacationBNA logo SVG -->
        </div>
    </div>
    <div class="card-content">
        <!-- Staff information and contact details -->
    </div>
</div>
```

### Customization

#### Staff Information
Update the following elements with your staff member's details:

- **Name**: `.staff-name` - 20px, weight 600, color #111111
- **Role**: `.staff-role` - 14px, weight 500, color #757575  
- **Company**: `.staff-company` - 13px, weight 400, color #BDBDBD
- **Bio**: `.bio p` - 13px, weight 400, color #616161

#### Contact Information
Each contact row should include:
- **Phone**: `tel:` link with phone icon
- **Email**: `mailto:` link with email icon  
- **Website**: `https:` link with website icon

#### Avatar
- **Size**: 88px diameter (72px on screens ≤320px)
- **Border**: 2px solid #111111
- **Position**: Overlapping top panel at x=20, y=24
- **Icon**: Generic profile icon (SVG) instead of placeholder image

## Design Specifications

### Dimensions
- **Card size**: 360px × 600px (mobile-first)
- **Border radius**: 12px
- **Top panel height**: 120px
- **Padding**: 20px (16px on narrow screens)

### Colors
- **Top panel**: #ECECEC
- **Card background**: #FFFFFF
- **Text primary**: #111111
- **Text secondary**: #757575
- **Text tertiary**: #BDBDBD
- **Text body**: #616161
- **Accent blue**: #2B6EF6
- **Dividers**: #EEEEEE
- **Row borders**: #F2F2F2

### Typography
- **Font family**: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial
- **Font weights**: 400 (regular), 500 (medium), 600 (semibold)

## Responsive Behavior

### Breakpoints
- **≤320px**: Reduced avatar size (72px), compressed padding (16px)
- **≤480px**: Full-width card with margins
- **≥768px**: Grid layout for multiple cards

### Accessibility Features
- **ARIA labels** for screen readers
- **Keyboard navigation** with focus outlines
- **High contrast mode** support
- **Reduced motion** preference respect
- **Semantic HTML** structure

## Browser Support

- **Modern browsers**: Chrome 60+, Firefox 60+, Safari 12+, Edge 79+
- **CSS Grid**: Supported in all modern browsers
- **CSS Custom Properties**: Fallbacks provided
- **SVG**: Inline SVG for crisp icons at all resolutions

## Performance

- **Optimized assets**: Inline SVG icons for faster loading
- **Font loading**: Preconnect to Google Fonts
- **CSS**: Minified and optimized for production
- **Images**: WebP support recommended for avatars

## Development

### Local Development
1. Clone or download the files
2. Open `index.html` in a web browser
3. For multiple examples, open `examples.html`

### Customization
- Modify `styles.css` for design changes
- Update SVG icons in the `assets/` folder
- Replace profile icon with actual staff photos

## License

This component is created for VacationBNA internal use. All rights reserved.

## Support

For technical support or customization requests, contact the development team.