# Weather Forecast Application

A professional, production-ready weather forecast application built with React, Next.js, and TypeScript. This application demonstrates best practices in modern web development including clean architecture, SOLID principles, comprehensive testing, and responsive design.

## 🌟 Features

- **Real-time Weather Data**: Current conditions and 7-day forecasts
- **Weather Alerts**: Display weather warnings and alerts when available
- **Location Search**: Search for any city worldwide with autocomplete
- **Geolocation Support**: Get weather for your current location
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **User Preferences**: Customizable temperature and wind speed units
- **Error Handling**: Graceful error states with retry functionality
- **Performance Optimized**: Implements caching, debouncing, and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA attributes
- **Dark Mode Ready**: Prepared for dark mode implementation

## 🏗️ Architecture & Design Principles

### Clean Architecture

The application follows clean architecture principles with clear separation of concerns:

```
src/
├── components/       # Presentation layer (UI components)
│   ├── ui/          # Reusable UI components
│   └── weather/     # Weather-specific components
├── hooks/           # Custom React hooks (business logic)
├── services/        # Data layer (API interactions)
├── types/           # TypeScript type definitions
├── utils/           # Utility functions (pure functions)
└── constants/       # Application constants
```

### SOLID Principles

1. **Single Responsibility**: Each component/function has one clear purpose
2. **Open/Closed**: Components are extensible through props without modification
3. **Liskov Substitution**: Components can be replaced with their subtypes
4. **Interface Segregation**: Components depend only on interfaces they use
5. **Dependency Inversion**: High-level modules don't depend on low-level modules

### Design Patterns

- **Repository Pattern**: WeatherService abstracts data access
- **Observer Pattern**: React Query for state management
- **Composition Pattern**: Component composition for flexible UI
- **Factory Pattern**: Utility functions for data transformation
- **Singleton Pattern**: API client and service instances

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Weather API key from [WeatherAPI.com](https://www.weatherapi.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/weather-forecast-app.git
cd weather-forecast-app
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env.local
```

4. Add your Weather API key to `.env.local`:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
NEXT_PUBLIC_WEATHER_API_URL=https://api.weatherapi.com/v1
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 🧪 Testing

### Test Strategy

The application implements a comprehensive testing strategy:

- **Unit Tests**: Testing individual functions and components in isolation
- **Integration Tests**: Testing API interactions and data flow
- **Component Tests**: Testing component rendering and interactions
- **Coverage Goals**: Minimum 70% coverage for all metrics

### Running Tests

```bash
# Run all tests
npm run test

# Run tests with coverage report
npm run test:coverage

# Run tests in watch mode during development
npm run test:watch
```

### Test Structure

Tests are co-located with the code they test:

- Unit tests: `src/tests/unit/`
- Integration tests: `src/tests/integration/`
- Component tests: Alongside components as `*.test.tsx`

## 💻 Development

### Code Quality

The project uses several tools to maintain code quality:

- **TypeScript**: Type safety and better IDE support
- **ESLint**: Code linting with Next.js and TypeScript rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for linting and formatting
- **lint-staged**: Run linters on staged files

### Git Workflow

1. Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

2. Make your changes and commit:

```bash
git add .
git commit -m "feat: add new feature"
```

3. Push to your branch:

```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request

### Commit Convention

Follow conventional commits for clear history:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions or changes
- `chore:` Maintenance tasks

## 🎨 UI/UX Considerations

### Responsive Design

- Mobile-first approach using Tailwind CSS
- Breakpoints: Mobile (< 640px), Tablet (640px - 1024px), Desktop (> 1024px)
- Touch-friendly interface for mobile devices

### Performance

- React Query for efficient data fetching and caching
- Debounced search to reduce API calls
- Lazy loading for optimal initial load time
- Optimized images and assets

### Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🏭 Production Deployment

### Build Optimization

The application is optimized for production:

- Code splitting for optimal bundle size
- Tree shaking to remove unused code
- Minification and compression
- Image optimization
- Static generation where possible

### Environment Variables

Production environment variables:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_production_api_key
NEXT_PUBLIC_WEATHER_API_URL=https://api.weatherapi.com/v1
```

### Deployment Options

The application can be deployed to:

- **Vercel** (recommended): Zero-configuration deployment
- **Netlify**: Static site hosting with serverless functions
- **AWS**: Using Amplify or EC2
- **Docker**: Containerized deployment

Example Vercel deployment:

```bash
npm install -g vercel
vercel
```

## 📊 Performance Metrics

Target metrics for production:

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Lighthouse Score**: > 90

## 🔒 Security Considerations

- API keys stored in environment variables
- Input sanitization for search queries
- Rate limiting on API calls
- HTTPS only in production
- Content Security Policy headers
- XSS protection

## 📚 API Documentation

### Weather Service

The application uses the WeatherAPI.com service with the following endpoints:

- **Current Weather**: `/current.json`
- **Forecast**: `/forecast.json`
- **Location Search**: `/search.json`
- **IP Location**: `/ip.json`

### Rate Limits

Free tier limitations:

- 1,000,000 calls/month
- 14-day weather forecast
- 3-day hourly forecast

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Weather data provided by [WeatherAPI.com](https://www.weatherapi.com/)
- Icons from [Lucide React](https://lucide.dev/)
- UI components inspired by modern design systems
- Built with [Next.js](https://nextjs.org/) and [React](https://reactjs.org/)

## 📞 Support

For issues and questions:

- Create an issue in the GitHub repository
- Check existing issues before creating new ones
- Provide detailed information for bug reports

## 🚦 Project Status

**Current Version**: 1.0.0
**Status**: Production Ready
**Last Updated**: 2024

---

Built with ❤️ following best practices in modern web development.
