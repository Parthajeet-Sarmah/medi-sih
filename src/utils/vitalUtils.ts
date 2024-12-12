import { Heart, Activity, Weight, Thermometer } from 'lucide-react';

export const getVitalIcon = (type: string) => {
  switch (type) {
    case 'Heart Rate':
      return Heart;
    case 'Blood Pressure':
      return Activity;
    case 'Weight':
      return Weight;
    case 'Temperature':
      return Thermometer;
    default:
      return Activity;
  }
};

export const getVitalUnit = (type: string) => {
  switch (type) {
    case 'Heart Rate':
      return 'bpm';
    case 'Blood Pressure':
      return 'mmHg';
    case 'Weight':
      return 'kg';
    case 'Temperature':
      return '°C';
    default:
      return '';
  }
};

export const getVitalNormalRange = (type: string) => {
  switch (type) {
    case 'Heart Rate':
      return '60-100 bpm';
    case 'Blood Pressure':
      return '90/60-120/80 mmHg';
    case 'Weight':
      return 'BMI 18.5-24.9';
    case 'Temperature':
      return '36.1-37.2°C';
    default:
      return '';
  }
};