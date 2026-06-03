# Backend készítése Webáruházhoz


A feladat egy Restfull alkalmazás elkészítése. A backend végpontjait tartalmazza a project mappa. 

Node.js szervert Express keretrendszert használnuk. 


# .env fájl tartalma

A project mappába hozd létre a .env fájlt. 

DB_FILE=adatbazisom.sqlite

## Indítás

Terminálba: 

cd project
node app.js

Böngészőbe: http://localhost:3000

## Az adatbázis

Egyetlen **termek**  táblából áll. 

id
nev
ar
leiras
kedvezmeny



## Végpontok (REST API)

GET    /termek           -> összes termék
GET    /termek/:id       -> egy termék
POST   /termek           -> új termék
PUT    /termek/:id       -> módosítás
DELETE /termek/:id       -> törlés


# Feladatok

## A csoport

1. Jelenítsd meg az adatbázisban lévő termékeket az oldalon kártya formátumban! Minden kártyához tartozzon egy gomb, amire rákattintva a vásárlólistához rakhatjuk. 
2. A kártyáka elrendezését flexbox-szal oldd meg! Az oldal reszponzív legyen!
3. A vásárlólistába tett termékeket jelenítsd meg az oldal aside elemében egy felsorolásban. A felsorolás alatt szerepeljen a kiválasztott termékek összértéke is. 
4. Legyen két gomb  az oldal tetején, amik segítségevel tudom szűrni a kedvezményes/összes terméket. 


## B csoport

1. Jelenítsd meg az adatbázisban lévő termékeket az oldalon táblázatos  formátumban! Minden terméksorhoz  tartozzon egy gomb, amire rákattintva a "KIVALASZTOTT" listába kerül a termék. 
2. A KIVALASZTOTT lista termékeit a táblázat alatt kártyás formátumban jelenítsd meg.  
3. A kártyák elrendezését flexbox-szal oldd meg!  
4. Legyen két gomb  az oldal tetején, amik segítségevel ár szerint növekvő, illetve csökkenő sorrendbe tudom rendezni a termékeket. 

## A szükséges osztályok

**Server** - ez felel az api végpontok eléréséért, itt röténik a GET kérés
**Termekek** - az összes termék listázása
**Termek** - egyetlen termék megjelenítése (táblázat egy sora, vagy kártya)
**KivalasztottTermekek** - Kiválasztott termékek megjelenítése (kártya formátumban, vagy listában csoporttól függően) esetleg lehet még egy osztály KivalasztottTermekElem 





