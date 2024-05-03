import type { Config } from 'tailwindcss'

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
      //ExtraBold 800
      //Bold 700
      //SemiBold 600
      //Medium 500
      //Regular 400
      fontSize: {
        h1: ['50px', { lineHeight: '68px', fontWeight: '800' }],
        h2: ['40px', { lineHeight: '54px', fontWeight: '800' }],
        h3: ['24px', { lineHeight: '33px', fontWeight: '700' }],
        subReg: ['22px', { lineHeight: '33px', fontWeight: '400' }],
        subSemi: ['22px', { lineHeight: '33px', fontWeight: '600' }],
        subBold: ['22px', { lineHeight: '33px', fontWeight: '700' }],
        subExtra: ['22px', { lineHeight: '33px', fontWeight: '700' }],
        p1Reg: ['20px', { lineHeight: '32px', fontWeight: '400' }],
        p1Semi: ['20px', { lineHeight: '32px', fontWeight: '600' }],
        p1Bold: ['20px', { lineHeight: '32px', fontWeight: '700' }],
        p1Extra: ['20px', { lineHeight: '32px', fontWeight: '800' }],
        p2Reg: ['18px', { lineHeight: '28px', fontWeight: '400' }],
        p2Semi: ['18px', { lineHeight: '28px', fontWeight: '600' }],
        p2Bold: ['18px', { lineHeight: '28px', fontWeight: '700' }],
        p2Extra: ['18px', { lineHeight: '28px', fontWeight: '800' }],
        p3Reg: ['16px', { lineHeight: '26px', fontWeight: '400' }],
        p3Semi: ['16px', { lineHeight: '26px', fontWeight: '600' }],
        p3Bold: ['16px', { lineHeight: '26px', fontWeight: '700' }],
        p3Extra: ['16px', { lineHeight: '26px', fontWeight: '800' }],
      },
    }
  }
}
