export const seats = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  isAvailable: Math.random() > 0 
}));
