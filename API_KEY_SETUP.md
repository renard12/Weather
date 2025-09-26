# Weather API Key Setup Guide

## Quick Start

To use this Weather Forecast application, you need a free API key from WeatherAPI.com.

## Step 1: Get Your API Key

1. Visit [WeatherAPI.com](https://www.weatherapi.com/)
2. Click on "Sign Up" (it's free!)
3. Complete the registration
4. Once logged in, go to your dashboard
5. Copy your API key

## Step 2: Configure the Application

1. In the project root, you'll find a file called `.env.example`
2. Create a new file called `.env.local`
3. Add your API key:

```env
NEXT_PUBLIC_WEATHER_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_WEATHER_API_URL=https://api.weatherapi.com/v1
```

Replace `your_actual_api_key_here` with the API key you copied.

## Step 3: Restart the Application

If you're running the development server:

1. Stop the server (Ctrl+C / Cmd+C)
2. Run `npm run dev` again

## Free Tier Limits

The free tier includes:

- 1,000,000 API calls per month
- Current weather data
- 3-day weather forecast
- Location search
- Weather history (7 days)

## Troubleshooting

If you see "API Key Missing" error:

- Make sure `.env.local` file exists in the root directory
- Verify the API key is correctly copied (no extra spaces)
- Restart the development server after adding the key

## Security Note

- Never commit `.env.local` to version control
- The `.gitignore` file already excludes it
- For production, use environment variables from your hosting platform
