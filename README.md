# Søjlediagram-loop

Dette er en beskrivelse af, hvordan loopet fungerer til at tegne et søjlediagram baseret på en række af værdier.

## For-løkke

Til at gennemgå hver værdi i rækken bruger vi en '**for**'-løkke. Løkken starter ved 0 og fortsætter indtil '**i**' er mindre end længden af rækken.

```JavaScript
for (let i = 0; i < data.length; i++) {
  // Søjlediagram-kode her
}
```

Inde i løkken har vi koden til at tegne en søjle for hver værdi.

## Positionering af søjler

Først beregner vi den korrekte '**x**'- og '**y**'-position for hver søjle. '**x**'-positionen beregnes som '**i \* barWidth**', hvor i er den aktuelle værdis position i rækken. Vi tilføjer også '**margin**' og '**padding**' til '**x**'-positionen for at give en visuel margen og afstand mellem søjlerne.

```JavaScript
const x = i * barWidth + margin + padding;
```

'**y**'-positionen beregnes ved at finde højden af søjlen baseret på dens værdi og den maksimale højde. I dette eksempel er den maksimale højde defineret som '**barHeight - margin - padding**'. Vi ganger også værdien med '**barHeight / 32**', fordi vi i dette eksempel bruger 32 som den maksimale værdi, og vi vil skalere søjlens højde til den korrekte størrelse.

```JavaScript
const y = canvas.height - data[i] * (barHeight / 32) - margin - padding;
```

## Tegning af søjler

Til sidst bruger vi '**diagramCT.fillRect**' til at tegne søjlen med de beregnede '**x**', '**y**', bredden ('**barWidth - padding \* 2**') og højden ('**data[i] \* (barHeight / 32)**'). Vi angiver også en farve for søjlen ved at indstille '**diagramCT.fillStyle**'.

```JavaScript
diagramCT.fillStyle = '#ff0000';
diagramCT.fillRect(x, y, barWidth - padding * 2, data[i] * (barHeight / 32));
```
