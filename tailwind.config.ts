import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        black: '#000000',
        grey: {
          20: '#F9F9F9',
          40: '#E4E4E4',
          60: '#78788C',
          80: '#29293E',
          100: '#000000',
        },
        blue: {
          20: '#DAE4FF',
          40: '#AAC2FF',
          60: '#618DFF',
          80: '#4266E8',
          100: '#1F4AE8',
        },
        turquoise: {
          20: '#EEF5F6',
          40: '#E0EBED',
          60: '#BFE4EB',
          80: '#88C9D6',
          100: '#69AAB7',
        },
        orange: {
          20: '#FFECEA',
          40: '#FFDCD8',
          60: '#FFBBB2',
          80: '#F04F3C',
          100: '#E8341F',
        },
        copper: {
          20: '#FFF7ED',
          40: '#F8E9D8',
          60: '#FFD4A3',
          80: '#FDA746',
          100: '#E28A26',
        },
        pink: {
          20: '#FFF1F0',
          40: '#FFDDDC',
          60: '#FFC5C3',
          80: '#FCA2A1',
          100: '#FF8482',
        },
        brown: {
          20: '#FFEBDC',
          40: '#ECCAB0',
          60: '#AE8563',
          80: '#654831',
          100: '#51341E',
        },
        green: {
          20: '#AFEDEA',
          40: '#7ED0CB',
          60: '#189F97',
          80: '#068179',
          100: '#046B65',
        },
      },
      fontFamily: {
        openSans: ['OpenSans', 'sans-serif'],
      },
      fontSize: {
        // Using clamp() to dynamically adjust sizes from mobile to desktop
        h1: [
          'clamp(1.375rem, 2.5vw + 1rem, 3.125rem)',
          { lineHeight: '1.1', fontWeight: 800 },
        ], // Scales from 22px to 50px
        h2: [
          'clamp(1.25rem, 2vw + 1rem, 2.5rem)',
          { lineHeight: '1.1', fontWeight: 800 },
        ], // Scales from 20px to 40px
        h3: [
          'clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)',
          { lineHeight: '1.1', fontWeight: 700 },
        ], // Scales from 18px to 24px

        'subtitle-reg': [
          'clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)',
          { lineHeight: '1.1', fontWeight: 400 },
        ], // Scales from 18px to 24px
        'subtitle-semibold': [
          'clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)',
          { lineHeight: '1.1', fontWeight: 500 },
        ], // Scales from 18px to 24px
        'subtitle-bold': [
          'clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)',
          { lineHeight: '1.1', fontWeight: 700 },
        ], // Scales from 18px to 24px
        'subtitle-extra-bold': [
          'clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)',
          { lineHeight: '1.1', fontWeight: 800 },
        ], // Scales from 18px to 24px

        'p1-reg': [
          'clamp(1rem, 1vw + 0.5rem, 1.25rem)',
          { lineHeight: '1.6', fontWeight: 400 },
        ], // Scales from 16px to 20px
        'p1-semibold': [
          'clamp(1rem, 1vw + 0.5rem, 1.25rem)',
          { lineHeight: '1.6', fontWeight: 500 },
        ], // Scales from 16px to 20px
        'p1-bold': [
          'clamp(1rem, 1vw + 0.5rem, 1.25rem)',
          { lineHeight: '1.6', fontWeight: 700 },
        ], // Scales from 16px to 20px
        'p1-extra-bold': [
          'clamp(1rem, 1vw + 0.5rem, 1.25rem)',
          { lineHeight: '1.6', fontWeight: 800 },
        ], // Scales from 16px to 20px

        'p2-reg': [
          'clamp(0.875rem, 1vw + 0.25rem, 1rem)',
          { lineHeight: '1.63', fontWeight: 400 },
        ], // Scales from 14px to 16px
        'p2-semibold': [
          'clamp(0.875rem, 1vw + 0.25rem, 1rem)',
          { lineHeight: '1.63', fontWeight: 500 },
        ], // Scales from 14px to 16px
        'p2-bold': [
          'clamp(0.875rem, 1vw + 0.25rem, 1rem)',
          { lineHeight: '1.63', fontWeight: 700 },
        ], // Scales from 14px to 16px
        'p2-extra-bold': [
          'clamp(0.875rem, 1vw + 0.25rem, 1rem)',
          { lineHeight: '1.63', fontWeight: 800 },
        ], // Scales from 14px to 16px

        'p3-reg': [
          'clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)',
          { lineHeight: '1.71', fontWeight: 400 },
        ], // Scales from 12px to 14px
        'p3-semibold': [
          'clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)',
          { lineHeight: '1.71', fontWeight: 500 },
        ], // Scales from 12px to 14px
        'p3-bold': [
          'clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)',
          { lineHeight: '1.71', fontWeight: 700 },
        ], // Scales from 12px to 14px
        'p3-extra-bold': [
          'clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem)',
          { lineHeight: '1.71', fontWeight: 800 },
        ], // Scales from 12px to 14px
      },
    },
  },
};
