---
title: 'Quicksort algorithm'
excerpt: 'Il QuickSort è un algoritmo di ordinamento efficiente e ampiamente utilizzato che si basa sulla tecnica di "divide et impera". Questo algoritmo, inventato da Tony Hoare nel 1960, opera suddividendo...'
type: 'Personal'
started: '2023-11-21'
---

Il QuickSort è un algoritmo di ordinamento efficiente e ampiamente utilizzato che si basa sulla tecnica di "divide et impera". Questo algoritmo, inventato da Tony Hoare nel 1960, opera suddividendo il problema dell'ordinamento in sotto-problemi più piccoli, risolvendoli in modo indipendente e combinando poi le soluzioni ottenute.

```math
x = x^2
```

Il cuore del QuickSort è il processo di partizionamento, che consiste nel selezionare un elemento chiamato "pivot" dalla lista da ordinare e posizionarlo in modo che tutti gli elementi più piccoli siano a sinistra del pivot e tutti quelli più grandi siano a destra. Questo processo viene quindi ripetuto ricorsivamente per le due sotto-liste create dal partizionamento, fino a quando l'intera lista è ordinata.

L'efficienza del QuickSort deriva dalla sua capacità di ordinare le sotto-liste in modo parallelo, sfruttando la natura divide-et-impera dell'algoritmo. Inoltre, il processo di partizionamento è generalmente veloce e richiede un numero limitato di confronti e scambi, rendendo il QuickSort particolarmente adatto per grandi quantità di dati.
## Descrizione Quicksort
Quicksort, come merge sort, è basato sul paradigma *divide et impera*. Questi sono i tre passi del processo divide et impera per ordinare un generico sottoarray $ A[p..r]$.

**Divide**: partizionare l'array $A[p..r]$ in due sottoarray $A[p..q-1]$ e $A[q+1..r]$ tali che per ogni elemento $A[p..q-1]$ sia minore o uguale ad $A[q]$ che, a sua volta, è minore o uguale a ogni elemeto di $A[q+1..r]$. Calcolare l'indice *q* come parte di questa procedura di partizionamento;

**Impera**: ordinare i due sottoarray $A[p..q-1]$ e $A[q-1..r]$ chiamando ricorsivamente *quicksort*;

**Combina**: poiché i due sottoarray sono già ordinati, non occorre alcun lavoro per combinarli, l'intero array $A[p..r]$ è ordinato.