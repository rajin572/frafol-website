# Frafol Website Translation Handbook

## Task Overview

Translate the Frafol website from English to Slovak (slovenčina) based on the CSV file `Frafol Drive Issues - Translation Website Part 1.csv`. This handbook documents all completed translations for both Part 1 (Home Page & Related) and Part 2 (Additional Pages & Components).

**Key Requirements:**

- Comment out English texts (do NOT remove them)
- Add Slovak translations
- Do NOT change any design or CSS classes
- Preserve all functionality

## Translation Approach

For each file:

1. Find English text strings in JSX/TSX components
2. Comment out the English text using `{/* English text */}` format
3. Add Slovak translation below or as replacement
4. Keep all className, props, and structure unchanged

## Completed Files

### Page Files (src/app/(withNavFooter)/)

1. **data-protection/page.tsx**
   - Page title: "General Data Protection Regulation." → "Všeobecné nariadenie o ochrane osobných údajov."

2. **framework-agreement/page.tsx**
   - Page title: "Framework Agreement/rámcová zmluva" → "Rámcová zmluva"

3. **how-ordering-works/page.tsx**
   - Page title: "How Ordering Works" → "Ako funguje objednávanie"

4. **how-it-works/page.tsx**
   - Page title: "How It Works" → "Ako to funguje"

5. **marketplace/page.tsx**
   - Metadata title: "Frafol - Photography" → "Frafol – Bazár"

6. **photography/page.tsx**
   - Metadata title: "Frafol - Photography" → "Frafol – Fotografia"

7. **professionals/page.tsx**
   - Metadata title: "Frafol - Professionals" → "Frafol – Tvorcovia"

8. **videography/page.tsx**
   - Metadata title: "Frafol - Videography" → "Frafol – Video"

9. **workshops/page.tsx**
   - Metadata title: "Frafol - Workshops" → "Frafol – Kurzy"
   - Banner title: "Workshops" → "Kurzy"

10. **forums/page.tsx**
    - Banner title: "Forum" → "Diskusie"

11. **success/page.tsx**
    - No translation needed (uses PaymentSuccess component)

12. **terms-of-service/page.tsx**
    - Page title: "Terms of Service Conceptural" → "Všeobecné obchodné podmienky Zmluvné vzťahy"

### Component Files

13. **Photography/PhotographyPage.tsx**
    - Section header title and description
    - Button: "See All Photographers" → "Zobraziť všetkých fotografov"

14. **Workshops/WorkshopsPage.tsx**
    - Section header title and description

15. **Forum/ForumPage.tsx**
    - Section header title and description

16. **Forum/ForumNewPost.tsx**
    - Button: "New Post" → "Nový príspevok"

17. **Forum/ForumAllComents.tsx**
    - Heading: "Replies" → "Odpovede"

18. **Forum/ForumReplyCard.tsx**
    - Button: "Reply" → "Odpovedať"
    - Button: "Hide Replies" → "Skryť odpovede"
    - Button: "View Replies (N)" → "Zobraziť odpovede (N)"

19. **Forum/ForumSubmitReply.tsx**
    - Label: "Replying to:" → "Odpovedáte:"
    - Placeholder: "Write your reply here..." → "Napíšte svoju odpoveď tu..."
    - Button: "Post Comment" → "Odoslať komentár"

20. **HelpfulDocuments/HelpfulDocumentsPage.tsx**
    - Page title and description

21. **shared/PaymentSuccess.tsx**
    - Heading: "Payment Successful!" → "Platba bola úspešná!"
    - Button: "Continue" → "Pokračovať"
    - Text: "Need help? Contact" → "Potrebujete pomoc? Kontaktujte"

22. **MarketPlace/MarketPlacePage.tsx**
    - Banner and section header titles
    - Description
    - Button: "Add New Gear" → "Pridať nové príslušenstvo"

23. **Professional/AllProfessionalPage.tsx**
    - Section header title and description
    - Button: "Back To Categories" → "Späť na kategórie"

24. **Videographey/VideographeyPage.tsx**
    - Section header title and description
    - Button: "See All Videographers" → "Zobraziť všetkých kameramanov"

## Translation Pattern Example

### Before (English):

```tsx
<SectionHeader
  title="Featured Professionals"
  description="Discover our top-rated photographers and videographers"
/>
<button>See All Professionals</button>
```

### After (Slovak):

```tsx
{/* title="Featured Professionals" */}
{/* description="Discover our top-rated photographers and videographers" */}
<SectionHeader
  title="Odporúčaní fotografi a kameramani"
  description="Objavte našich najlepšie hodnotených fotografov a kameramanov"
/>
<button>
  {/* See All Professionals */}
  Zobraziť všetkých fotografov a kameramanov
</button>
```

## Important Notes

1. **Comment Format**: Use `{/* English text */}` for comments in JSX
2. **No Design Changes**: Only text content was changed - all className, styles, and structure preserved
3. **CSV Compliance**: All translations follow the CSV file exactly
4. **Special Characters**: Slovak characters (á, é, í, ó, ú, ý, č, ď, ľ, ň, š, ť, ž) are properly encoded

## Completed Translations Summary

### Part 1 - Home Page & Related Components

- Home Page components (Banner, FAQ, Footer, etc.)
- About Us page
- Cart page
- Contact Us page

### Part 2 - Additional Pages & Components

- Data Protection page
- Framework Agreement page
- How Ordering Works page
- How It Works page
- Marketplace page and components
- Photography page and components
- Professionals page and components
- Videography page and components
- Workshops page and components
- Forums pages and components
- Forum Details components
- Helpful Documents page and components
- Success page component
- Terms of Service pages

### Not in Scope

- Notification page (empty page - no content to translate)
- Dashboard pages
- Modal components (except those directly related to translated pages)

## File Structure

```
src/
├── app/
│   └── (withNavFooter)/
│       ├── data-protection/page.tsx ✓
│       ├── framework-agreement/page.tsx ✓
│       ├── how-ordering-works/page.tsx ✓
│       ├── how-it-works/page.tsx ✓
│       ├── marketplace/page.tsx ✓
│       ├── photography/page.tsx ✓
│       ├── professionals/page.tsx ✓
│       ├── videography/page.tsx ✓
│       ├── workshops/page.tsx ✓
│       ├── forums/page.tsx ✓
│       ├── forums/[id]/page.tsx ✓
│       ├── helpful-documents/page.tsx ✓
│       ├── success/page.tsx ✓
│       └── terms-of-service/page.tsx ✓
└── components/
    ├── Auth/
    │   ├── FotgotPassword.tsx ✓
    │   ├── SignIn.tsx ✓
    │   ├── JoinFrafol.tsx ✓
    │   ├── UpdatePassword.tsx ✓
    │   ├── ChooseRole.tsx ✓
    │   ├── ChooseSpecialization.tsx ✓
    │   ├── PersonalInformation.tsx ✓
    │   ├── AdditionalInformation.tsx ✓
    │   ├── LegalInvoiceDetails.tsx ✓
    │   ├── ReviewDetailsAndSubmit.tsx ✓
    │   ├── SignUpUser.tsx ✓
    │   ├── SignUpUserOTPVerify.tsx ✓
    │   ├── SignUpProfessionalOTPVerify.tsx ✓
    │   └── ForgetPasswordOTPVerify.tsx ✓
    ├── Photography/PhotographyPage.tsx ✓
    ├── Videographey/VideographeyPage.tsx ✓
    ├── Professional/AllProfessionalPage.tsx ✓
    ├── Workshops/WorkshopsPage.tsx ✓
    ├── Forum/
    │   ├── ForumPage.tsx ✓
    │   ├── ForumNewPost.tsx ✓
    │   ├── ForumAllComents.tsx ✓
    │   ├── ForumReplyCard.tsx ✓
    │   └── ForumSubmitReply.tsx ✓
    ├── HelpfulDocuments/HelpfulDocumentsPage.tsx ✓
    ├── MarketPlace/MarketPlacePage.tsx ✓
    └── shared/PaymentSuccess.tsx ✓
```

## Verification Checklist

- [x] All English texts commented out with `{/* */}` or `// ` format
- [x] Slovak translations added
- [x] No design/CSS changes made
- [x] All functionality preserved
- [x] CSV translations followed exactly
- [x] No parsing errors in translated files

## CSV Reference

### File: `Frafol Drive Issues - Translation Website Part 1.csv`

- Lines 1-356 translated
- Covers: All pages and components mentioned in the task
