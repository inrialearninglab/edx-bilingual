# edX translate JS

## Getting started

1. Upload `edx-translate.js` to **Files & Uploads**
2. On each unit where you need internationalization add a *Raw HTM* component 
3. Import `edx-translate.js`
   ```html
   <script src="/static/ill-styleguide.js"></script>
   ```
4. Add a language selection radio button
   ```html
   <div class="edx-lang">
     <span><i class="fa fa-globe"></i></span>
     <label><input type="radio" name="edx-lang" class="set-lang" data-lang="fr" /> <span>FR</span></label>
     <label><input type="radio" name="edx-lang" class="set-lang" data-lang="en" /> <span>EN</span></label>
   </div>
   ```
5. Add some text using `text-en` or `text-xx`, `xx` representing the language ISO 639-1 code
   ```html
   <h4>
     <span class="text-fr">Objectifs / Prérequis</span>
     <span class="text-en">Objectives / Prerequisites</span>
   </h4>
   ```

**Warning :** For quizzes you need to keep the answer numerotation label (`a.`, `b.`, `c.`, etc) outside of the translation tag otherwise you won't be able to see what student have answered in the dashboard. For example :

```html
<problem display_name="Quiz 01" markdown="null">
  <p>
    <span class="text-fr">
      <em>Sélectionnez la ou les bonnes réponses pour chaque question puis cliquez sur "Vérifier".</em>
    </span>
    <span class="text-en">
      <em>
      Choose the correct response(s) for each question and click on "Check".
    </em>
    </span>
  <multiplechoiceresponse>
    <choicegroup label="Multiple choice" type="MultipleChoice">
      <choice correct="true">a. 
        <span class="text-fr">Premier choix</span>
        <span class="text-en">First choice</span>
      </choice>
      <choice correct="false">b. 
        <span class="text-fr">Second choix</span>
        <span class="text-en">Second choice</span>
      </choice>
      <choice correct="false">c. 
        <span class="text-fr">Troisème choix</span>
        <span class="text-en">Third choice</span>
      </choice>
    </choicegroup>
  </multiplechoiceresponse>
```
