# NOIRÉ — Luxury Fashion E-commerce Demo

A premium editorial-style fashion e-commerce demo built with **Next.js, TypeScript, and Tailwind CSS**.

NOIRÉ is designed to showcase a high-end digital fashion experience with a strong focus on **visual storytelling, refined typography, reusable architecture, accessibility, performance, and responsive design**.

---

## ✨ Features

- 🖤 **Editorial Design** — Asymmetrical layouts, cinematic hero sections, refined typography, and a luxury-focused visual language using Bodoni Moda and Manrope.
- 🛍️ **E-commerce Experience** — Product listings, filtering, sorting, search, quick view, cart, and wishlist functionality.
- 💾 **Persistent Client State** — Cart and wishlist data persist through `localStorage`.
- 🎬 **Smooth Animations** — Framer Motion-powered scroll reveals, hover effects, transitions, and micro-interactions.
- ♿ **Accessibility Focused** — Semantic HTML, keyboard navigation, ARIA labels, visible focus states, and support for `prefers-reduced-motion`.
- 🎨 **Centralized Theme System** — CSS variables for colors, typography, spacing, and other design tokens.
- ⚙️ **Brand Configuration** — Core brand information is centralized in `src/config/brand.ts` for easier customization.
- 📱 **Fully Responsive** — Designed for mobile, tablet, desktop, and large displays from approximately 320px to 1920px+.
- ⚡ **Performance Optimized** — Built with the Next.js App Router, Server Components, `next/image`, and lazy loading.
- 🔍 **SEO Ready** — Metadata, Open Graph, Twitter Cards, sitemap generation, and `robots.txt`.

---

## 🛠️ Tech Stack

| Technology                                                             | Purpose                                               |
| ---------------------------------------------------------------------- | ----------------------------------------------------- |
| [Next.js 15](https://nextjs.org/)                                      | React framework with App Router and Server Components |
| [TypeScript](https://www.typescriptlang.org/)                          | Static typing and improved developer experience       |
| [Tailwind CSS v4](https://tailwindcss.com/)                            | Utility-first styling                                 |
| [shadcn/ui](https://ui.shadcn.com/)                                    | Accessible and reusable UI primitives                 |
| [Framer Motion](https://www.framer.com/motion/)                        | Animations and transitions                            |
| [Zustand](https://github.com/pmndrs/zustand)                           | Lightweight client-side state management              |
| [Lucide React](https://lucide.dev/)                                    | Interface icons                                       |
| [next/font](https://nextjs.org/docs/app/api-reference/components/font) | Optimized font loading                                |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `>= 18.17`
- npm, yarn, or pnpm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/your-username/noire-fashion-demo.git
```

Navigate to the project:

```bash
cd noire-fashion-demo
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 📁 Project Structure

```text
src/
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── shop/
│   │   └── page.tsx             # Product listing and filters
│   ├── products/
│   │   └── [slug]/              # Product detail pages
│   ├── collections/              # Collection pages
│   ├── lookbook/                 # Editorial lookbook
│   ├── about/                    # Brand story
│   ├── cart/                     # Cart page
│   ├── wishlist/                 # Wishlist page
│   ├── search/                   # Search results
│   ├── sitemap.ts                # Sitemap generator
│   └── robots.ts                 # Robots.txt generator
│
├── components/                   # Reusable UI components
│   ├── ui/                       # Base UI primitives
│   ├── layout/                   # Header, Footer, AnnouncementBar
│   ├── home/                     # Homepage sections
│   ├── shop/                     # Shop filters and product grid
│   ├── product/                  # Product-related components
│   ├── cart/                     # Cart drawer and page components
│   ├── search/                   # Search components
│   ├── lookbook/                 # Lookbook components
│   └── shared/                   # Shared components
│
├── config/
│   └── brand.ts                  # Brand configuration
│
├── data/
│   ├── products.ts               # Product catalog
│   ├── collections.ts            # Collection data
│   ├── lookbook.ts               # Lookbook data
│   └── navigation.ts             # Navigation links
│
├── store/                        # Zustand stores
├── types/                        # TypeScript types and interfaces
├── lib/                          # Utility functions
└── styles/
    └── globals.css               # Global styles and design tokens
```

---

## 🎨 Customization

NOIRÉ is structured to make **rapid rebranding and client customization** straightforward.

### Adapting the Project for a New Brand

1. Collect the client's assets:
   - Logo
   - Brand colors
   - Product photography
   - Typography
   - Brand copy
   - Social media links

2. Create a dedicated Git branch:

```bash
git checkout -b client-brand-name
```

3. Update the brand configuration:

```text
src/config/brand.ts
```

Update information such as:

- Brand name
- Tagline
- Logo
- Social links
- Contact information
- Announcement bar content

4. Update the product catalog:

```text
src/data/products.ts
```

Customize:

- Product names
- Descriptions
- Prices
- Images
- Sizes
- Colors
- Categories

5. Update collections:

```text
src/data/collections.ts
```

6. Update lookbook content:

```text
src/data/lookbook.ts
```

7. Update navigation:

```text
src/data/navigation.ts
```

8. Replace the project imagery.

Images can either be loaded from external URLs or stored locally inside:

```text
public/images/
```

9. Customize the design tokens in:

```text
src/styles/globals.css
```

10. Update brand-specific copy across the relevant pages and components.

11. Test the project locally:

```bash
npm run dev
```

12. Build the project before deployment:

```bash
npm run build
```

13. Push the client branch and deploy the project.

---

## 🎨 Theme System

The design system uses CSS variables to centralize colors and other visual properties.

For example:

```css
:root {
  --primary: hsl(0 0% 4%);
  --accent: hsl(39 100% 50%);
  --background: hsl(0 0% 100%);
}
```

This makes it easier to adapt the visual identity without modifying individual components.

### Typography

Fonts are loaded through `next/font` in:

```text
src/app/layout.tsx
```

To change the typography system, replace the imported font and update the corresponding CSS variables.

---

## 📦 Deployment

### Deploy with Vercel

The recommended deployment platform for this project is [Vercel](https://vercel.com/).

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Vercel automatically detects the Next.js configuration.
4. Review the build settings.
5. Deploy the project.

### Vercel CLI

You can also deploy directly from the terminal:

```bash
npm install -g vercel
```

Then:

```bash
vercel
```

### Environment Variables

The current demo does **not require environment variables**.

All product and collection data is static and stored locally within the project.

---

## 🧪 Testing

Build the application locally to verify that the project compiles successfully:

```bash
npm run build
```

### Manual Testing Checklist

- [ ] Product listing
- [ ] Product filtering
- [ ] Product sorting
- [ ] Product search
- [ ] Product quick view
- [ ] Product detail pages
- [ ] Add to cart
- [ ] Update cart quantity
- [ ] Remove products from cart
- [ ] Wishlist functionality
- [ ] Wishlist persistence
- [ ] Search overlay
- [ ] Responsive layouts
- [ ] Keyboard navigation
- [ ] Reduced-motion behavior
- [ ] SEO metadata
- [ ] Sitemap generation
- [ ] `robots.txt`

If the repository contains a `TESTING.md` file, use it for additional project-specific testing instructions.

---

## 🔮 Future Improvements

Potential production-oriented extensions include:

- Real payment integration
- Backend product management
- Database integration
- Authentication
- Customer accounts
- Order management
- Inventory management
- Admin dashboard
- CMS integration
- Real-time product availability
- Analytics and conversion tracking
- Advanced SEO optimization

---

## 📄 License

This project is licensed under the **MIT License**.

See the [`LICENSE`](LICENSE) file for more information.

You are free to use, modify, and adapt the project for personal or commercial purposes in accordance with the license terms.

---

## 🙏 Acknowledgements

- Photography from [Unsplash](https://unsplash.com/)
- Icons from [Lucide](https://lucide.dev/)
- UI primitives from [shadcn/ui](https://ui.shadcn.com/)
- Fonts provided through [Google Fonts](https://fonts.google.com/)

---

## 👨‍💻 Author

**Nour Eldean Tamer**

Full-Stack Developer & Web Designer focused on building modern, high-performance digital experiences.

---

<div align="center">

**Designed & built with ❤️ for fashion brands that value restraint.**

</div>
