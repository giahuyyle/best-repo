import { ref, get, getDatabase } from 'firebase/database';
import { app } from '../config/firebase';

const db = getDatabase(app);

export const getMilestones = async () => {
  try {
    const productsRef = ref(db, 'milestones');
    const snapshot = await get(productsRef);
    
    if (snapshot.exists()) {
      // Convert Firebase object to array format
      const products = Object.entries(snapshot.val()).map(([key, value]) => ({
        id: key,
        ...value
      }));
      return products;
    }
    
    console.log("fail")
    return [];
  } catch (error) {
    console.error('Error fetching milestones:', error);
    return [];
  }
};

export const milestonesData = [
  {
    date: "July 2023",
    title: "First Meeting",
    description: "The day our eyes met and everything changed",
    emoji: "💫",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
  },
  {
    date: "August 2023",
    title: "First Date",
    description: "Nervous butterflies and the best conversation of my life",
    emoji: "☕",
  },
  {
    date: "September 2023",
    title: "Made It Official",
    description: "The moment you said yes to being my girlfriend",
    emoji: "💕",
  },
  {
    date: "December 2023",
    title: "First Christmas",
    description: "Our first holiday together, full of joy and laughter",
    emoji: "🎄",
  },
  {
    date: "February 2024",
    title: "Valentine's Day",
    description: "Celebrating our love with the perfect romantic evening",
    emoji: "🌹",
  },
  {
    date: "June 2024",
    title: "Summer Adventure",
    description: "Our amazing summer vacation and all those sunset memories",
    emoji: "🌅",
  },
  {
    date: "September 2024",
    title: "One Year Together",
    description: "Our first anniversary celebration - what a milestone!",
    emoji: "🎉",
  },
  {
    date: "July 2025",
    title: "Two Years Strong",
    description: "Today - celebrating two incredible years of love",
    emoji: "💖",
  },
];