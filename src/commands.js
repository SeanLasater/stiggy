import { TIRE_CHOICES } from './downforceData.js';
/*
import { TRACK_CHOICES } from './transData.js';
import { CARS } from './carData.js';
*/

// tune-downforce
export const TUNEDOWNFORCE_COMMAND = {
  name: 'tune-downforce',
  description: 'Tune for optimal downforce based on weight, balance, and tire.',
  options: [
    {
      name: 'weight',                                 
      description: 'Car weight in pounds (lbs)',      
      type: 10, // num 
      required: true,                                  
      min_value: 1000,                            
      max_value: 5000,                                
    },
    {
      name: 'front',                               
      description: 'Front weight distribution % (e.g. 54)',  
      type: 10, // num 
      required: true,
      min_value: 30, 
      max_value: 70,
    },
    {
      name: 'tire',                                
      description: 'Tire compound',                   
      type: 3, // string
      required: true,
      choices: TIRE_CHOICES,
    },
  ]
};

// tune-camberthrust
export const TUNECAMBERTHRUST_COMMAND = {
  name: 'tune-camberthrust',
  description: 'Calculate optimal toe-out to counteract camber thrust.',
  options: [
    {
      name: 'tire',
      description: 'Tire compound',
      type: 3,
      required: true,
      choices: TIRE_CHOICES,
    },
    {
      name: 'camber',
      description: 'Front camber angle in degrees',
      type: 10,
      required: true,
      min_value: 0,
      max_value: 8,
    },
  ],
};

// tune-transmission
export const TUNETRANSMISSION_COMMAND = {
  name: 'tune-transmission',                  
  description: 'Tune transmission based on track and car.',
  options: [  
    {
      name: 'track',                                 
      description: 'Track name (e.g. "Monza")',
      type: 3, // string
      required: true,
      autocomplete: true,
    },
    {
      name: 'car',                                   
      description: 'Car name (e.g. "Porsche 911 GT3 RS")',
      type: 3, // string
      required: true,
      autocomplete: true,
    },
  ],
};

// tune-differential
export const TUNEDIFFERENTIAL_COMMAND = {
  name: 'tune-differential',
  description: 'Analyze diff tuning and return sliding‑scale behaviour profiles.',
  options: [
    {
      name: 'initial_torque',
      description: 'Initial torque value (0-60 scale)',
      type: 10,
      required: true,
      min_value: 0,
      max_value: 60,
    },
    {
      name: 'acceleration_sensitivity',
      description: 'Acceleration sensitivity value (0-60 scale)',
      type: 10,
      required: true,
      min_value: 0,
      max_value: 60,
    },
    {
      name: 'braking_sensitivity',
      description: 'Braking sensitivity value (0-60 scale)',
      type: 10,
      required: true,
      min_value: 0,
      max_value: 60,
    }
  ],
};