<div align="center">

# 🕌 Zakat Calculator — حاسبة الزكاة

**Outil de calcul et de gestion de la Zakat — أداة حساب وإدارة الزكاة**

Application web **autonome** (un seul fichier HTML) · **100 % hors-ligne** · sans serveur, sans compte, sans publicité.
تطبيق ويب **مستقل** (ملف HTML واحد) · يعمل **بدون إنترنت** · بلا خادم، بلا حساب، بلا إعلانات.

🌍 **[Français](#-français)** · **[العربية](#-العربية)**

> 🤲 Ce projet est offert comme **Sadaqa Jariya** (aumône continue). Partagez-le librement.
> هذا المشروع **صدقة جارية**. انشروه واحتسبوا الأجر.

</div>

---

# 🇫🇷 Français

## Table des matières
1. [Qu'est-ce que ce programme ?](#quest-ce-que-ce-programme-)
2. [Qu'est-ce que la Zakat ?](#quest-ce-que-la-zakat-)
3. [Installation et lancement](#installation-et-lancement)
4. [Guide d'utilisation étape par étape](#guide-dutilisation-étape-par-étape)
5. [Fonctionnalités détaillées](#fonctionnalités-détaillées)
6. [Méthode de calcul](#méthode-de-calcul)
7. [Confidentialité et données](#confidentialité-et-données)
8. [Compatibilité](#compatibilité)
9. [Questions fréquentes](#questions-fréquentes)
10. [Avertissement religieux](#avertissement-religieux)
11. [Auteur](#auteur)

---

## Qu'est-ce que ce programme ?

**Zakat Calculator** est une application web qui aide tout musulman à **calculer le montant de sa Zakat** de façon simple, précise et privée. Elle réunit dans une seule page :

- la saisie de tous vos avoirs (or, argent liquide, devises étrangères) ;
- la conversion automatique de l'or selon son carat ;
- la vérification du **Nissab** (seuil d'imposition) ;
- le calcul des **2,5 %** dus ;
- un **suivi d'une année à l'autre** ;
- l'**export PDF** d'un récapitulatif propre à imprimer ou archiver.

Le tout fonctionne **sans connexion Internet** et **sans envoyer aucune donnée** : tout reste sur votre appareil.

## Qu'est-ce que la Zakat ?

La Zakat est le **troisième pilier de l'Islam**. C'est une obligation pour tout musulman dont les biens atteignent un seuil minimum (le **Nissab**) et le conservent pendant une année lunaire complète (le **Hawl**). Elle consiste à verser **2,5 %** de ces avoirs aux ayants droit.

- **Nissab** : seuil minimum de richesse, basé sur la valeur de **85 g d'or pur (24 carats)**. Il évolue chaque année selon le cours de l'or.
- **Hawl** : période d'**une année lunaire (~354 jours)** de possession continue au-dessus du Nissab.

> 📖 L'application contient un **Guide de la Zakat** complet (bouton « 📖 Guide / دليل » en haut), expliquant les conditions, les bénéficiaires et des exemples chiffrés.

## Installation et lancement

Aucune installation, aucun logiciel à télécharger.

1. Récupérez le fichier **`index.html`**.
2. **Double-cliquez** dessus, ou ouvrez-le dans n'importe quel navigateur (Chrome, Edge, Firefox, Safari).
3. C'est prêt. L'application s'ouvre et garde automatiquement votre travail en cours.

💡 Sur téléphone, vous pouvez ouvrir le fichier dans le navigateur puis l'ajouter à l'écran d'accueil pour un accès rapide.

## Guide d'utilisation étape par étape

L'application est organisée en **6 étapes** (sur mobile, naviguez avec les flèches ⬅ ➡ ou en **glissant** l'écran ; sur ordinateur tout est visible) :

| Étape | Ce que vous faites |
|------:|--------------------|
| **1. Date & Nissab** | Choisissez la date hijri d'échéance du Hawl et renseignez le seuil Nissab du jour. |
| **2. Paramètres** | Indiquez le prix actuel de l'or 18k et les taux de change (€, $, SAR). |
| **3. Devises** | Saisissez vos montants en devises étrangères — la conversion en DA est automatique. |
| **4. Or** | Ajoutez chaque bijou (nom, carat, poids). L'app convertit tout en équivalent 18k. |
| **5. Liquidités** | Ajoutez vos comptes, espèces, créances à récupérer, etc. |
| **6. Résultat** | Voyez la jauge vers le Nissab, le montant de Zakat, la répartition et l'historique. |

À tout moment, le **bandeau supérieur** affiche en temps réel : Or, Devises, Liquidités, Total et **Zakat due**.

## Fonctionnalités détaillées

- 🪙 **Or multi-carats** — gère le 14k, 18k, 21k et 24k, avec conversion automatique en équivalent 18k pour une valorisation correcte.
- 💱 **Devises** — Euro, Dollar, Riyal saoudien, plus **une devise personnalisée** avec son propre taux.
- ⚖️ **Nissab paramétrable** — avec rappel des équivalents en grammes d'or (24k : 85 g · 21k : 97 g · 18k : 113 g).
- 📅 **Date hijri → grégorienne** — saisie au calendrier musulman, conversion automatique affichée.
- 📊 **Jauge de progression** vers le Nissab + **compteurs animés** des montants.
- 🥧 **Camembert** de répartition des avoirs (Or / Devises / Liquidités).
- ✎ **Édition rapide** — modifiez un poids ou un montant directement dans le tableau, d'un seul clic.
- ⚡ **Saisie accélérée** — puces (Bague, Bracelet, Collier…) et infobulles d'aide ⓘ.
- 📖 **Guide bilingue** FR / AR intégré.
- 🗓️ **Historique annuel** — chaque année hijri est mémorisée, avec **comparaison automatique** « vs année précédente », et **import** d'une ancienne sauvegarde pour comparer même après changement d'appareil.
- 🌙 **Mode sombre** — suit le réglage de votre système, mémorisé pour les prochaines visites.
- 📄 **Export PDF (A4)** prêt à imprimer ou archiver.
- 💾 **Sauvegarde / Chargement** de vos données en fichier **JSON**.
- 📱 **Responsive** — interface tactile, navigation par étapes et **swipe** sur mobile.

## Méthode de calcul

```
Total des avoirs = Valeur de l'or (équivalent 18k) + Liquidités + Devises converties

SI  Total ≥ Nissab   →   Zakat = Total × 2,5 %   (soit Total ÷ 40)
SINON                →   Pas de Zakat due
```

**Exemple :**

| Catégorie | Montant |
|-----------|--------:|
| 🪙 Or 18k | 850 000 DA |
| 💵 Liquidités | 1 200 000 DA |
| 💱 Devises | 320 000 DA |
| **Total** | **2 370 000 DA** |
| Nissab | 1 870 000 DA ✅ |
| **Zakat due** | **59 250 DA** |

> La Zakat n'est due **que** si le Hawl (année lunaire complète) est écoulé **et** que le total atteint le Nissab.

## Confidentialité et données

- 🔒 **Aucune connexion serveur**, aucun traçage, aucun compte.
- 💾 Vos données restent **uniquement** dans le `localStorage` de votre navigateur.
- 📄 Les sauvegardes JSON et les PDF sont générés **localement**, sur votre appareil.

> ⚠️ Le stockage du navigateur est propre à **un appareil et un navigateur**. Pour transférer ou archiver vos données, utilisez le bouton **Sauvegarder** (fichier JSON) puis **Charger** ailleurs.

## Compatibilité

Fonctionne sur les navigateurs récents : **Chrome, Edge, Firefox, Safari** — sur **PC, Android et iOS**. Interface optimisée pour le tactile (boutons larges, pas de zoom intempestif sur iOS).

## Questions fréquentes

**Faut-il Internet ?** — Non. Une fois le fichier ouvert, tout fonctionne hors-ligne.

**Mes données sont-elles envoyées quelque part ?** — Non, jamais. Tout reste sur votre appareil.

**Comment passer mes données sur un autre téléphone ?** — Bouton **Sauvegarder** → vous obtenez un fichier `.json`. Ouvrez l'app sur l'autre appareil → bouton **Charger**.

**Le Nissab change tout seul ?** — Non. Vous le mettez à jour chaque année selon l'annonce officielle (en Algérie : Ministère des Affaires Religieuses et des Wakfs).

**Pourquoi une date hijri et pas grégorienne ?** — Parce que le Hawl suit le calendrier lunaire ; une date grégorienne fixe se décalerait d'environ 11 jours chaque année.

## Avertissement religieux

Cet outil est une **aide au calcul** et couvre les cas les plus courants. Il **ne remplace pas** l'avis d'un savant. Certains sujets sont volontairement exclus pour rester simple : Zakat sur actions boursières, immobilier locatif, déduction des dettes, différences entre écoles juridiques (madhahib), Zakat al-Fitr. En cas de doute ou de situation particulière, **consultez un imam ou un spécialiste compétent**.

## Auteur

**XeneX Ameen**

---

<div dir="rtl" align="right">

# 🇸🇦 العربية

## المحتويات
1. [ما هو هذا البرنامج؟](#ما-هو-هذا-البرنامج)
2. [ما هي الزكاة؟](#ما-هي-الزكاة)
3. [التثبيت والتشغيل](#التثبيت-والتشغيل)
4. [دليل الاستخدام خطوة بخطوة](#دليل-الاستخدام-خطوة-بخطوة)
5. [المزايا بالتفصيل](#المزايا-بالتفصيل)
6. [طريقة الحساب](#طريقة-الحساب)
7. [الخصوصية والبيانات](#الخصوصية-والبيانات)
8. [التوافق](#التوافق)
9. [أسئلة شائعة](#أسئلة-شائعة)
10. [تنبيه شرعي](#تنبيه-شرعي)
11. [المؤلّف](#المؤلف)

---

## ما هو هذا البرنامج؟

**حاسبة الزكاة** تطبيق ويب يساعد كل مسلم على **حساب مقدار زكاته** بطريقة بسيطة ودقيقة وخاصة. يجمع في صفحة واحدة:

- إدخال جميع أموالك (الذهب، السيولة النقدية، العملات الأجنبية)؛
- تحويل الذهب تلقائياً حسب عياره؛
- التحقق من **النصاب** (حدّ وجوب الزكاة)؛
- حساب **2.5%** الواجبة؛
- **متابعة من سنة إلى أخرى**؛
- **تصدير PDF** لملخّص جاهز للطباعة أو الحفظ.

ويعمل كل ذلك **بدون اتصال بالإنترنت** و**بدون إرسال أي بيانات**: كل شيء يبقى على جهازك.

## ما هي الزكاة؟

الزكاة هي **الركن الثالث من أركان الإسلام**، وهي واجبة على كل مسلم بلغ ماله حدّاً أدنى (**النصاب**) وحال عليه **الحول** (سنة قمرية كاملة). وتتمثّل في إخراج **2.5%** من تلك الأموال للمستحقّين.

- **النصاب**: الحدّ الأدنى من المال، ويُقدَّر بقيمة **85 غراماً من الذهب الخالص (عيار 24)**. يتغيّر كل سنة حسب سعر الذهب.
- **الحول**: مرور **سنة قمرية (~354 يوماً)** على ملك النصاب دون أن ينقص عنه.

> 📖 يحتوي التطبيق على **دليل كامل للزكاة** (زر «📖 Guide / دليل» في الأعلى) يشرح الشروط والمستحقّين مع أمثلة بالأرقام.

## التثبيت والتشغيل

لا حاجة لأي تثبيت أو تنزيل برامج.

1. احصل على ملف **`index.html`**.
2. **انقر عليه نقراً مزدوجاً**، أو افتحه بأي متصفّح (Chrome، Edge، Firefox، Safari).
3. جاهز. يفتح التطبيق ويحفظ عملك الحالي تلقائياً.

💡 على الهاتف، يمكنك فتح الملف في المتصفّح ثم إضافته إلى الشاشة الرئيسية للوصول السريع.

## دليل الاستخدام خطوة بخطوة

التطبيق منظَّم في **6 خطوات** (على الهاتف تنقّل بالأسهم ⬅ ➡ أو **بالسحب**؛ على الحاسوب كل شيء ظاهر):

| الخطوة | ما تقوم به |
|------:|-----------|
| **1. التاريخ والنصاب** | اختر تاريخ اكتمال الحول بالهجري، وأدخل قيمة النصاب الحالية. |
| **2. الإعدادات** | أدخل سعر الذهب عيار 18 الحالي وأسعار الصرف (€، $، ريال). |
| **3. العملات** | أدخل مبالغك بالعملات الأجنبية — والتحويل إلى الدينار تلقائي. |
| **4. الذهب** | أضِف كل قطعة (الاسم، العيار، الوزن). يحوّلها التطبيق إلى ما يعادل عيار 18. |
| **5. السيولة** | أضِف حساباتك ونقودك والديون المرجوّة، إلخ. |
| **6. النتيجة** | شاهد مؤشّر بلوغ النصاب، ومبلغ الزكاة، والتوزيع، والسجلّ السنوي. |

في كل لحظة يعرض **الشريط العلوي** مباشرةً: الذهب، العملات، السيولة، المجموع، و**الزكاة المستحقّة**.

## المزايا بالتفصيل

- 🪙 **ذهب متعدّد الأعيرة** — يدعم 14 و18 و21 و24 قيراطاً، مع تحويل تلقائي إلى ما يعادل عيار 18 لتقييم صحيح.
- 💱 **العملات** — اليورو، الدولار، الريال السعودي، إضافةً إلى **عملة مخصّصة** بسعرها الخاص.
- ⚖️ **نصاب قابل للتعديل** — مع تذكير بما يعادله بالغرامات (عيار 24: 85غ · عيار 21: 97غ · عيار 18: 113غ).
- 📅 **تاريخ هجري ← ميلادي** — إدخال بالتقويم الهجري وتحويل تلقائي معروض.
- 📊 **مؤشّر تقدّم** نحو النصاب + **عدّادات متحرّكة** للمبالغ.
- 🥧 **مخطّط دائري** لتوزيع الأموال (ذهب / عملات / سيولة).
- ✎ **تعديل سريع** — عدّل الوزن أو المبلغ مباشرةً في الجدول بنقرة واحدة.
- ⚡ **إدخال مُعجَّل** — أزرار سريعة (خاتم، سوار، عقد…) وتلميحات مساعدة ⓘ.
- 📖 **دليل ثنائي اللغة** فرنسي / عربي.
- 🗓️ **سجلّ سنوي** — كل سنة هجرية تُحفَظ، مع **مقارنة تلقائية** «مقابل السنة الماضية»، و**استيراد** نسخة قديمة للمقارنة حتى بعد تغيير الجهاز.
- 🌙 **الوضع الليلي** — يتبع إعداد نظامك ويُحفَظ للزيارات القادمة.
- 📄 **تصدير PDF (A4)** جاهز للطباعة أو الأرشفة.
- 💾 **حفظ / تحميل** بياناتك بملف **JSON**.
- 📱 **متجاوب** — واجهة لمسية، تنقّل بالخطوات و**السحب** على الهاتف.

## طريقة الحساب

```
مجموع الأموال = قيمة الذهب (معادل عيار 18) + السيولة + العملات المحوَّلة

إذا كان  المجموع ≥ النصاب   →   الزكاة = المجموع × 2.5٪   (أي المجموع ÷ 40)
وإلا                        →   لا زكاة واجبة
```

**مثال:**

| الفئة | المبلغ |
|------|------:|
| 🪙 ذهب عيار 18 | 850,000 دج |
| 💵 سيولة | 1,200,000 دج |
| 💱 عملات | 320,000 دج |
| **المجموع** | **2,370,000 دج** |
| النصاب | 1,870,000 دج ✅ |
| **الزكاة الواجبة** | **59,250 دج** |

> لا تجب الزكاة **إلا** إذا حال الحول (سنة قمرية كاملة) **وبلغ** المجموع النصاب.

## الخصوصية والبيانات

- 🔒 **لا اتصال بخادم**، لا تتبُّع، لا حساب.
- 💾 تبقى بياناتك **فقط** في تخزين المتصفّح المحلّي (`localStorage`).
- 📄 ملفات الحفظ JSON وملفات PDF تُنشأ **محلياً** على جهازك.

> ⚠️ تخزين المتصفّح خاصّ **بجهاز ومتصفّح واحد**. لنقل بياناتك أو أرشفتها، استخدم زر **حفظ** (ملف JSON) ثم **تحميل** في مكان آخر.

## التوافق

يعمل على المتصفّحات الحديثة: **Chrome، Edge، Firefox، Safari** — على **الحاسوب وأندرويد وiOS**. واجهة محسّنة للّمس (أزرار كبيرة، بلا تكبير مزعج على iOS).

## أسئلة شائعة

**هل يلزم الإنترنت؟** — لا. بعد فتح الملف يعمل كل شيء دون اتصال.

**هل تُرسَل بياناتي إلى أي جهة؟** — لا، أبداً. كل شيء يبقى على جهازك.

**كيف أنقل بياناتي إلى هاتف آخر؟** — زر **حفظ** ← تحصل على ملف `.json`. افتح التطبيق على الجهاز الآخر ← زر **تحميل**.

**هل يتغيّر النصاب تلقائياً؟** — لا. تُحدّثه كل سنة وفق الإعلان الرسمي (في الجزائر: وزارة الشؤون الدينية والأوقاف).

**لماذا التاريخ الهجري وليس الميلادي؟** — لأن الحول يتبع التقويم القمري؛ والتاريخ الميلادي الثابت يتقدّم نحو 11 يوماً كل سنة.

## تنبيه شرعي

هذه الأداة **معينة على الحساب** وتغطّي الحالات الأكثر شيوعاً، و**لا تُغني** عن سؤال أهل العلم. استُبعدت بعض المسائل قصداً للتبسيط: زكاة الأسهم، والعقارات المؤجَّرة، وخصم الديون، والفروق بين المذاهب، وزكاة الفطر. عند الشكّ أو في الحالات الخاصة **استشر إماماً أو متخصّصاً**.

## المؤلّف

**XeneX Ameen**

</div>

---

<div align="center" dir="rtl">

🤲 *اللهم اجعل هذا العمل صدقةً جاريةً عنّي وعن والديّ. انشروه ولكم الأجر، ولا تنسونا من صالح دعائكم.*

</div>
