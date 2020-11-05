import React from "react";
import { Helmet } from "react-helmet";

interface SeoProps {
  title: string;
  description?: string;
}

export default function Seo({ title, description }: SeoProps): JSX.Element {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Leobar" />
      <meta name="author" content="CoffeJeanCode" />
      <meta name="author" content="Bloba" />
    </Helmet>
  );
}
