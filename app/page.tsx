/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useState } from 'react';

import Banner from './components/banner';
import JapaneseExplanation from './components/japanese-explanation';
import EnglishExplanation from './components/english-explanation';
import JapaneseForm from './components/japanese-form';
import EnglishForm from './components/english-form';

export default function Home(this: any) {

  const [isActive, setIsActive] = useState(false);

  let englishActive = "";
  let japaneseActive = "";

  if (isActive) {
    japaneseActive = "hidden";
    englishActive = "";
  } else {
    japaneseActive = "";
    englishActive = "hidden";
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Banner />

      <div className="under-banner flex mx-5 justify-end">
        <div className="language-buttons mt-3 mr-5 md:mr-10 flex justify-end">
          <span className={englishActive}>
            <button
              type="button"
              onClick={() => setIsActive(false)}
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              🇯🇵 日本語
            </button>
          </span>

          <span className={japaneseActive}>
            <button
              type="button"
              onClick={() => setIsActive(true)}
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              🇬🇧/🇺🇸 English
            </button>
          </span>
        </div>
      </div>

      <span className={japaneseActive}>
        <JapaneseExplanation />
      </span>
      <span className={englishActive}>
        <EnglishExplanation />
      </span>

      <span className={japaneseActive}>
        <JapaneseForm />
      </span>
      <span className={englishActive}>
        <EnglishForm />
      </span>
    </main >
  );
}
