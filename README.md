Ciao ragazzi,
esercizio di oggi

React Product Catalog
repo: react-product-catalog

comando:

```
pnpm dlx tiged classe154/react-starter-template react-product-catalog
```


Oggi creeremo una piccola app React che recupera e visualizza una lista di prodotti da API esterna.

Dovrete realizzare una pagina che mostri tutti i prodotti ottenuti da questo endpoint:

https://fakestoreapi.com/products

faccio una ricerca (cosé fakestore api) -> inserisci link documetnazione

La chiamata HTTP dovrà essere fatta con useEffect, così da eseguire il fetch al caricamento del componente. L’API Fake Store mette a disposizione un endpoint GET /products che restituisce la lista completa dei prodotti.

```
function ProductList() {
    return ()
}
export default ProductList;

```
```
fetch(API_URL)
.then( response => {
    return response.json();
})
.then( json => {
    console.log(json);
})

```

L’app dovrà contenere almeno 3 componenti React.

Requisiti
L’app deve avere:

una lista di prodotti caricata da API
una barra di ricerca
filtraggio dei prodotti in tempo reale

come si fa il filtraggio prodotti in tempo reale?
almeno 3 componenti

Componenti minimi
Potete organizzarli come preferite, ma una divisione consigliata è:

App
SearchBar
ProductList

Facoltativo ma consigliato:
ProductCard

Per ogni prodotto mostrate almeno
immagine
titolo
prezzo
categoria

Vincoli tecnici
usare useEffect per il fetch

      ````
      useEffect (() => {
        // le cose che vanno rieseguite subito dopo il primo montaggio del componente (mounting) se array dipendenze vuoto; se array non vuoto  subito dopo il primo montaggio del componente (mounting) + ogni re-render componente in array


      }),[]

````
usare useState per gestire dati e ricerca

      ````
      const [ datiSearch, setDatiSearch ] = useState(valoreZero)
      `````

usare map() per renderizzare i prodotti

      ```
      arrayTanteCose.map ( cosa => {
        // scrivo il codice che deve essere riscritto per ogni cosa
      })
      ```

usare filter() per filtrare i prodotti in base al testo inserito
      ```
      const prodottiFiltrati = prodotti.filter ( product => product.includes(variabileDelCosa))

      ```

la barra di ricerca deve essere un input controllato

        l'input controllato si ottiene con il two-way data binding
        dallo stato all'input con value={variabile di stato}
        dallínput allo stato grzie a onChange  + eventHandler che:
        1. legge nuovo inpiut bersagliandolo come event.target.value 
        2. chiama funzione setter per riassegnare valore (riassegnazione useState scatena re-render)

        oltre a riassegnare valore, crea da listaZero una lista fiiltrata e sostituisce la lista in producList con quella filtrata 


Bonus
loading state
error state
contatore dei risultati trovati

Super Bonus
filtro per categoria
ordinamento per prezzo crescente/decrescente
messaggio personalizzato se la ricerca non produce risultati

Buon Lavoro