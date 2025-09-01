# 📬 Exercice Pratique de 5h : « La page de contact interactive du Portfolio d’Éléonore »

**Mission** : Créer la page de contact du portfolio d’Éléonore, photographe d’art contemporain.

## 🎯 Contexte de l’Exercice

Vous êtes **Concepteur Designer UI**. Après la page d’accueil, Éléonore souhaite une page de contact professionnelle, esthétique et interactive, pour permettre aux visiteurs de la joindre et de localiser son atelier.

- ✅ Header et footer déjà réalisés (réutilisez-les)
- ✅ Charte graphique du portfolio à respecter
- ✅ Lien vers la page d’accueil

**Votre mission** : Concevoir une page contact responsive, accessible, et animée, avec formulaire, carte, et informations de contact.

**À chaque étape, répondez aux questions dans un fichier à rendre avec votre projet.**

---

## 🛠️ Outils et Technologies

- **HTML5** : Structure sémantique
- **CSS3** : Styles, animations, transitions
- **Responsive Design** : Media queries, mobile first
- **Accessibilité** : Labels, contrastes, navigation clavier

---

## 🧠 Philosophie d’Apprentissage

**⚠️ IMPORTANT** : Ne copiez-collez jamais sans comprendre !

Votre approche doit être :
1. **LIRE** le code avant de le copier
2. **COMPRENDRE** chaque partie
3. **TESTER** chaque étape dans le navigateur
4. **EXPÉRIMENTER** en modifiant des valeurs
5. **QUESTIONNER** tout ce qui n’est pas clair
6. **PARTAGER** vos découvertes

---

## 📋 Progression Détaillée de l’Exercice (5h)

### Étape 0 : Récupérer le code de votre ancien projet ou repartez du corrigé accessible sur ce lien [https://github.com/gitkyo/0326-cp7-sc4-ex1]

- Cliquer sur le call to action (vert) avec écrit "<> code" et sélectionnez "Download ZIP"
- Décompressez le dossier
- Vous pouvez ensuite ouvrir vsCode, clic sur file > open folder et sélectionner le dossier précédemment décompressé.

### ⚡ Étape 1 : Structure HTML de la page contact (1h)

**Objectif** : Créer la base HTML de la page contact.

#### 1.1 Création des fichiers

- Ajoutez les fichiers `contact.html` et `contact.css` à la racine du projet soit à coté des fichiers "index.html, styles.css, script.js et README.md"

**Question** : Pourquoi séparer le CSS de la page contact ?

#### 1.2 Structure de la page

- Éditez le header de la page index.html afin d'adapter la navigation au vu de notre futur nouvelle page contact : il s'agit de changer la valeur de l'attribut href des balises <a> du menu pour le lien vers la page contact ainsi que celui vers la page d'accueil. Exemple :

Avant :

```html
<li><a href="#accueil">Accueil</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#about">À propos</a></li>
<li><a href="#contact">Contact</a></li>
```

Après :

```html
<li><a href="index.html">Accueil</a></li>
<li><a href="index.html#portfolio">Portfolio</a></li>
<li><a href="index.html#about">À propos</a></li>
<li><a href="contact.html">Contact</a></li>
```

- Puis copiez-collez le code ci dessous dans le fichier contact.html, adaptez la structure suivante pour reprendre __le header et le footer__ de la page index.html :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Contact - Éléonore Photographe</title>
	<link rel="stylesheet" href="styles.css">
	<link rel="stylesheet" href="contact.css">
</head>
<body>
	<!-- Header réutilisé -->
	<header>...copier/coller header existant...</header>
	<main>
		<section class="contact-hero">
			<h1>Contactez Éléonore</h1>
			<p>Une question, un projet ? Écrivez-moi ou venez me rencontrer à l’atelier !</p>
		</section>
		<section class="contact-content">
			<form class="contact-form">
				<h2>Formulaire de Contact</h2>
				<label for="name">Nom</label>
				<input type="text" id="name" name="name" required>
				<label for="email">Email</label>
				<input type="email" id="email" name="email" required>
				<label for="message">Message</label>
				<textarea id="message" name="message" required></textarea>
				<button type="submit">Envoyer</button>
			</form>
			<aside class="contact-infos">
				<h2>Coordonnées</h2>
				<p>📍 12 rue de l’Atelier, 75000 Paris</p>
				<p>📞 01 23 45 67 89</p>
				<p>✉️ eleonore.photo@email.com</p>
				<div class="contact-map">
					<!-- Iframe Google Maps ici -->
				</div>
			</aside>
		</section>
	</main>
	<!-- Footer réutilisé -->
	<footer>...copier/coller footer existant...</footer>
</body>
</html>
```

*note : Pensez à bien indenter votre code lors de copier-coller. Pour rappel, selectionnez la zone à indenter et utiliser la touche tabulation du clavier pour déplacer le code sur la droite et shift + tab pour déplacer le code sur la gauche.*

**Questions** :

- À quoi servent les balises `<section>`, `<aside>`, `<form>` ?
- Tester votre site et naviguez entre les différentes pages, que remarquez vous ?
- Quelle différence entre ces deux types de liens et comment les appelles t'on ?

```html
<li><a href="index.html#about">À propos</a></li>
<li><a href="contact.html">Contact</a></li>
```

---

### 🎨 Étape 2 : Stylisation CSS et Responsive (1h30)

**Objectif** : Styliser la page et la rendre responsive.

#### 2.1 Copier-coller la base CSS

- Ajoutez ce code et l'ajouter au fichier contact.css pour la mise en page :

```css
main{    
    margin: 0 auto;
}
aside{
    text-align: center;
}
.contact-hero{
    margin-top: 150px;
    text-align: center;
    background-image: url("https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 100px 0px;
    background-position: center center;
    color: #fff;
    font-size: 1.5em;
    text-shadow: 1px 1px 1px #000;
}
.contact-content {
	display: flex;
	flex-direction: column;
	gap: 2rem;	
    max-width: 1400px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 70px;
}
@media (max-width: 768px) {
    .contact-hero {
        margin-top: 280px;
    }
    .contact-content {
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
    }
    aside{
        margin-top: 100px;
    }
}

@media (min-width: 768px) {
	.contact-content {
		flex-direction: row;
		align-items: flex-start;
	}
	.contact-form, .contact-infos {
		flex: 1;
	}
    .contact-form{
        margin-top: 80px;
    }
}
.contact-form label {
	display: block;
	margin-top: 1rem;
}
.contact-form input, .contact-form textarea {
	width: 100%;
	padding: 0.8rem;
	margin-top: 0.5rem;
	border-radius: 8px;
	border: 1px solid #ccc;
	font-size: 1rem;
}
.contact-form button {
	margin-top: 1rem;
	background: #e74c3c;
	color: white;
	border: none;
	padding: 1rem 2rem;
	border-radius: 50px;
	cursor: pointer;
	transition: background 0.3s;
}
.contact-form button:hover {
	background: #c0392b;
}
.contact-map {
	margin-top: 1rem;
	width: 100%;
	aspect-ratio: 16/9;
	border-radius: 12px;
	overflow: hidden;
}
```

**Questions** :
- Que fait la propriété `flex-direction` ?
- Testez la page sur mobile et desktop : que remarquez-vous ?
- Pourquoi utiliser `@media (min-width: 768px)` ?
- Quelle différence avec `@media (max-width: 768px)` ?

---

### 🗺️ Étape 3 : Carte interactive et accessibilité (1h)

**Objectif** : Ajouter la carte et améliorer l’accessibilité.

#### 3.1 Carte interactive

- Ajoutez une iframe Google Maps personalisé ou cet iframe Open Street Map dans la balise qui contient la classe `contact-map` :

```html
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=2.2945,48.8584,2.2955,48.8594&amp;layer=mapnik" style="border:0; width:100%; height:100%;" allowfullscreen="" loading="lazy"></iframe>
```

**Questions** :
- Pourquoi utiliser `iframe` ?
- Que fait l’attribut `loading="lazy"` ? (Vous pouvez vous aider d'internet)
- Tester votre page

#### 3.2 Accessibilité

- Vérifiez que chaque champ a un label associé
- Testez la navigation au clavier (Tab)
- Vérifiez le contraste des couleurs

**Questions** :
- Pourquoi l’accessibilité est-elle importante ?
- Que se passe-t-il si un champ n’a pas de label ?

---

### ✨ Étape 4 : Animations et finitions (1h)

**Objectif** : Ajouter des animations CSS et peaufiner la page.

#### 4.1 Animations

- Ajoutez en bas du fichier contact.css une animation d’apparition sur le formulaire et la carte :

```css
@keyframes fadeInUp {
	from { opacity: 0; transform: translateY(30px);}
	to { opacity: 1; transform: translateY(0);}
}
.contact-form, .contact-map {
	animation: fadeInUp 1s ease;
}
```

- Tester votre page, que remarquez vous ?
- Ajoutez, toujours en bas du fichier contact.css un effet focus sur les champs :

```css
.contact-form input:focus, .contact-form textarea:focus {
	border-color: #e74c3c;
	outline: none;
	box-shadow: 0 0 0 2px #e74c3c33;
	transition: box-shadow 0.3s;
}
```

- Tester votre page, que remarquez vous ?

**Questions** :
- A votre avis, que fait `@keyframes fadeInUp` ?
- Pourquoi styliser le focus sur le formulaire ?

---

### ✨ Étape 5 : Validation du code

1. **HTML** : Allez sur [validator.w3.org](https://validator.w3.org)
2. **CSS** : Allez sur [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)

Avez vous des erreurs ?

---

### 📝 Étape 6 : Répondez au QCM (20 questions)

**1. Quelle balise HTML est la plus appropriée pour structurer un formulaire de contact ?**
- A) `<div>`   
- B) `<form>`   
- C) `<section>`   
- D) `<input>`

**2. Quel attribut HTML rend un champ obligatoire ?**
- A) `required`   
- B) `checked`   
- C) `disabled`   
- D) `autofocus`

**3. Quelle propriété CSS permet de rendre un site responsive ?**
- A) `float`   
- B) `z-index`   
- C) `@media`   
- D) `opacity`

**4. Quel est le rôle de la balise `<label>` ?**
- A) Ajouter du style   
- B) Associer un texte à un champ   
- C) Créer un bouton   
- D) Ajouter une image

**5. Quelle unité est la plus adaptée pour des marges fluides en responsive ?**
- A) `px`   
- B) `em`   
- C) `%`   
- D) `rem`

**6. Que fait la propriété CSS `flex-direction: row;` ?**
- A) Aligne horizontalement   
- B) Aligne verticalement   
- C) Cache les éléments   
- D) Change la couleur

**7. Quel attribut HTML améliore l'accessibilité d'une image ?**
- A) `alt`   
- B) `src`   
- C) `href`   
- D) `class`

**8. Quelle règle CSS cible le focus d'un champ ?**
- A) `input:focus`   
- B) `.focus`   
- C) `input:hover`   
- D) `input:active`

**9. Quel est l'intérêt d'utiliser `aspect-ratio` en CSS ?**
- A) Définir la couleur   
- B) Gérer la proportion largeur/hauteur   
- C) Ajouter une ombre   
- D) Centrer le texte

**10. Que fait l'attribut `loading="lazy"` sur une iframe ?**
- A) Charge immédiatement   
- B) Charge en différé   
- C) Empêche l'affichage   
- D) Change la couleur

**11. Quelle propriété CSS permet d'arrondir les coins d'un bouton ?**
- A) `border-radius`   
- B) `border-style`   
- C) `outline`   
- D) `box-shadow`

**12. Quel est le rôle de `transition` en CSS ?**
- A) Changer la police   
- B) Animer un changement   
- C) Ajouter une image   
- D) Créer une bordure

**13. Quelle balise HTML est sémantique pour un contenu principal ?**
- A) `<main>`   
- B) `<div>`   
- C) `<span>`   
- D) `<footer>`

**14. Que permet la propriété `box-shadow` ?**
- A) Ajouter une ombre   
- B) Changer la taille   
- C) Mettre en italique   
- D) Centrer un élément

**15. Quel est l'avantage du mobile first ?**
- A) Plus rapide sur mobile   
- B) Plus facile à coder   
- C) Meilleure compatibilité   
- D) Moins de code

**16. Quelle balise HTML est adaptée pour un menu de navigation ?**
- A) `<nav>`   
- B) `<ul>`   
- C) `<header>`   
- D) `<section>`

**17. Que fait `@keyframes` en CSS ?**
- A) Définit une animation   
- B) Crée une grille   
- C) Ajoute une image   
- D) Change la couleur

**18. Quel attribut HTML relie un label à un champ ?**
- A) `for`   
- B) `id`   
- C) `name`   
- D) `class`

**19. Quelle propriété CSS permet de centrer horizontalement un bloc avec une largeur fixe ?**
- A) `margin: 0 auto;`   
- B) `text-align: center;`   
- C) `float: left;`   
- D) `display: block;`

**20. Pourquoi utiliser des balises sémantiques ?**
- A) Pour le SEO et l'accessibilité   
- B) Pour la couleur   
- C) Pour la rapidité   
- D) Pour le fun

---

### 🤔 Bilan & Réflexion

💬 **Session de debriefing** : Prenez quelques minutes pour regarder ce que vous avez fait, notez les points délicats que vous ne comprenez pas pour questionner le groupe ou le formateur à la suite. Ecrivez un petit paragraphe avec vos ressentis, vos difficultés rencontrés depuis le début du module et comment vous les avez résolus.

🎉 **Félicitations ! Vous êtes arrivé au bout de cet exercice pratique !**
