
const inventory = [
    // Power-Ups
    {
      id: "hint-pack",
      name: "Hint Pack",
      description: "Reveals a portion of the password",
      price: 50,
      ingame: false,
      rarity: "common",
      _icon: "info",
      icon: null, 
      category: "powerUps",
      isPermanent: false,
      
    },
    {
      id: "extra-attempts",
      name: "Extra Attempts",
      description: "Get 3 more attempts at solving puzzles",
      price: 100,
      ingame: false,
      rarity: "common",
      _icon: "plus",
      icon: null,
      category: "powerUps",
      isPermanent: false,
      
    },
    // Cosmetics
    {
      id: "dark-theme",
      name: "Dark Hacker Theme",
      description: "Change your profile appearance to a sleek dark hacker theme",
      price: 200,
      ingame: false,
      rarity: "common",
      _icon: "star",
      icon: null,
      category: "cosmetics",
      isPermanent: true,
      
    },
    {
      id: "avatar-pack",
      name: "Elite Avatar Pack",
      description: "Unlock exclusive profile avatars",
      price: 150,
      ingame: false,
      rarity: "common",
      _icon: "user",
      icon: null,
      category: "cosmetics",
      isPermanent: true,
      
    },
    // Energy & Boosts
    {
      id: "energy-refill",
      name: "Full Energy Refill",
      description: "Instantly refill your energy to maximum",
      price: 120,
      ingame: false,
      rarity: "common",
      _icon: "zap",
      icon: null,
      category: "energy",
      isPermanent: false,
    },
    {
      id: "energy-booster",
      name: "Energy Booster",
      description: "Double energy regeneration for 1 hour",
      price: 80,
      ingame: false,
      rarity: "common",
      _icon: "zap",
      icon: null,
      category: "energy",
      isPermanent: false,
      
    },
    // Special Abilities
    {
      id: "password-reveal",
      name: "Password Reveal",
      description: "Instantly solve one password puzzle",
      price: 300,
      ingame: false,
      rarity: "common",
      _icon: "key",
      icon: null,
      category: "special",
      isPermanent: false,
      
    },
    {
      id: "similarity-boost",
      name: "Similarity Detector",
      description: "Improves similarity detection for 3 games",
      price: 250,
      ingame: false,
      rarity: "common",
      _icon: "search",
      icon: null,
      category: "special",
      isPermanent: false,
      
    },
  ];

export async function getInventory(){
    return inventory
}