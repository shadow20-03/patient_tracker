import React from "react";
import '../style/footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
        <p>&copy; {year} MedTrail. All rights reserved.</p>
    </footer>
  );
}
