/**
 * FirstTimeSetup Component
 * Displays setup instructions for first-time users
 */

'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, HeadingLevel } from '@/components/ui/Card';
import {
  containerStyles,
  wrapperStyles,
  contentContainerStyles,
  descriptionStyles,
  instructionListStyles,
  codeBlockStyles,
  linkStyles,
} from './FirstTimeSetup.styles';

export const FirstTimeSetup = () => {
  return (
    <div className={containerStyles}>
      <div className={wrapperStyles}>
        <Card>
          <CardHeader>
            <CardTitle as={HeadingLevel.H1}>Welcome to Weather Forecast App</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={contentContainerStyles}>
              <p className={descriptionStyles}>
                To get started, you need to add your Weather API key:
              </p>
              <ol className={instructionListStyles}>
                <li>
                  Get your free API key from{' '}
                  <a
                    href="https://www.weatherapi.com/signup.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkStyles}
                  >
                    WeatherAPI.com
                  </a>
                </li>
                <li>
                  Create a <code className={codeBlockStyles}>.env.local</code> file in the root
                  directory
                </li>
                <li>
                  Add your API key:
                  <pre className={codeBlockStyles}>
                    NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
                  </pre>
                </li>
                <li>Restart the development server</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
