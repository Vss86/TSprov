const fetch = require('node-fetch');
const { z } = require('zod');

// Zod-schema för Pokemon
const PokemonSchema = z.object({
  name: z.string(),
  height: z.number(),
  weight: z.number(),
});

// Funktion för att hämta Pokemon-data och beräkna BMI
async function getPokemonAndCalculateBMI(pokemonName) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
  try {
    // Hämta data från Pokemon API
    const response = await fetch(apiUrl);
    const pokemonData = await response.json();

    // Validera data med Zod-schema
    const validatedPokemon = PokemonSchema.parse(pokemonData);

    // Beräkna BMI
    const weightInKg = validatedPokemon.weight / 10;
    const heightInM = validatedPokemon.height / 10;
    const bmi = weightInKg / (heightInM * heightInM);

    // Logga BMI till konsolen
    console.log(`BMI for ${validatedPokemon.name}: ${bmi}`);
  } catch (error) {
    console.error('Error fetching or processing data:', error.message);
  }
}

// Använd funktionen med en valfri Pokemon (t.ex., Pikachu)
getPokemonAndCalculateBMI('pikachu');
