# MentorYab
A platform to connect mentors and mentees.


# Project Folder Structure

This project follows the Atomic Design methodology to organize its folder structure. Below is a description of each folder:

- **components/**: Contains all UI components organized by Atomic Design (atoms, molecules, organisms).
  - **atoms/**: Small, independent elements such as buttons, inputs, icons, and typography.
  - **molecules/**: Combinations of atoms that form a functional component (e.g., a search field composed of an input and a button).
  - **organisms/**: Groups of molecules that form larger sections of the UI (e.g., Navbar or Sidebar).
- **templates/**: Layout structures for pages without real data (e.g., a dashboard template that will later be populated with data).
- **pages/**: Actual project pages that display real content (e.g., Home.js, Dashboard.js).
- **hooks/**: Custom React hooks such as `useAuth` and `useFetch`.
- **context/**: Contains files for managing global state using React Context API.
- **utils/**: Utility functions like `formatDate.js` and `capitalize.js`.
- **assets/**: Stores images, icons, SVG files, and other media resources.
- **styles/**: CSS files or Tailwind configuration files.
- **services/**: Handles API calls (e.g., `authService.js` for managing login and signup requests).
