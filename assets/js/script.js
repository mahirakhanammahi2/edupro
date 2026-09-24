// =====================================================
// NAVBAR
// =====================================================

const navbar = document.getElementById("navbarSupportedContent");
const toggleButton = document.querySelector(".navbar-toggler");

if (navbar && toggleButton) {
  const icon = toggleButton.querySelector("i");

  // Hamburger / Times icon change
  navbar.addEventListener("shown.bs.collapse", function () {
    if (icon) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    }
  });

  navbar.addEventListener("hidden.bs.collapse", function () {
    if (icon) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });

  // Click outside navbar -> close
  document.addEventListener("click", function (event) {
    const isNavbarOpen = navbar.classList.contains("show");

    if (
      isNavbarOpen &&
      !navbar.contains(event.target) &&
      !toggleButton.contains(event.target)
    ) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(navbar);

      collapse.hide();
    }
  });

  // Menu item click -> close navbar
  const navLinks = navbar.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const collapse = bootstrap.Collapse.getOrCreateInstance(navbar);

      collapse.hide();
    });
  });
}

// =====================================================
// STATISTICS COUNTER
// =====================================================

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
  const target = Number(counter.dataset.target);

  let current = 0;

  const increment = target / 100;

  const updateCounter = () => {
    current += increment;

    if (current < target) {
      counter.textContent = Math.floor(current);

      requestAnimationFrame(updateCounter);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
};

// Start counter when section is visible

const statsSection = document.querySelector(".stats-section");

if (statsSection && counters.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => {
            startCounter(counter);
          });

          observer.unobserve(statsSection);
        }
      });
    },

    {
      threshold: 0.3,
    },
  );

  observer.observe(statsSection);
}

// =====================================================
// COURSE FILTER FUNCTIONALITY
// =====================================================

const filterButtons = document.querySelectorAll(".filter-btn");

const courseItems = document.querySelectorAll(".course-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Active button
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    this.classList.add("active");

    // Selected category
    const filterValue = this.getAttribute("data-filter");

    // Show / Hide courses
    courseItems.forEach((course) => {
      const category = course.getAttribute("data-category");

      if (filterValue === "all" || category === filterValue) {
        course.classList.remove("filter-hide");
        course.style.display = "";
      } else {
        course.classList.add("filter-hide");
        course.style.display = "none";
      }
    });
  });
});

// =====================================================
// COURSE DETAILS DATA
// =====================================================

const courseData = {
  // ---------------------------------------------------
  // WEB DEVELOPMENT
  // ---------------------------------------------------

  web: {
    category: "Web Development",

    title: "Full Stack Web Development",

    image: "./assets/images/course-web.jpg",

    rating: "4.9",

    students: "120 Students",

    price: "$49",

    duration: "8 Weeks",

    lessons: "42 Lessons",

    level: "Beginner - Advanced",

    description:
      "Learn modern web development from beginner to advanced level. Build responsive websites and full-stack web applications using HTML, CSS, Bootstrap, JavaScript, PHP and MySQL.",

    learn: [
      "HTML5 & Semantic Web Structure",
      "CSS3 & Responsive Design",
      "Bootstrap 5 Framework",
      "JavaScript Fundamentals",
      "PHP & MySQL Database",
      "Build Real-World Web Projects",
    ],

    curriculum: [
      "Introduction to Web Development",
      "HTML5 & CSS3 Fundamentals",
      "Bootstrap 5 & Responsive Design",
      "JavaScript Essentials",
      "PHP & MySQL",
      "Final Web Project",
    ],
  },

  // ---------------------------------------------------
  // PROGRAMMING
  // ---------------------------------------------------

  programming: {
    category: "Programming",

    title: "Programming Fundamentals",

    image: "./assets/images/course-programming.jpg",

    rating: "4.8",

    students: "95 Students",

    price: "$39",

    duration: "6 Weeks",

    lessons: "35 Lessons",

    level: "Beginner",

    description:
      "Build a strong programming foundation by learning variables, conditions, loops, arrays, functions and problem-solving techniques with practical examples.",

    learn: [
      "Programming Fundamentals",
      "Variables & Data Types",
      "Conditions & Loops",
      "Arrays & Strings",
      "Functions & Pointers",
      "Problem Solving Techniques",
    ],

    curriculum: [
      "Introduction to Programming",
      "Variables & Data Types",
      "Conditional Statements",
      "Loops & Arrays",
      "Functions & Pointers",
      "Programming Projects",
    ],
  },

  // ---------------------------------------------------
  // DATABASE
  // ---------------------------------------------------

  database: {
    category: "Database",

    title: "Database & MySQL",

    image: "./assets/images/course-database.jpg",

    rating: "4.7",

    students: "82 Students",

    price: "$35",

    duration: "5 Weeks",

    lessons: "28 Lessons",

    level: "Beginner - Intermediate",

    description:
      "Learn database concepts and MySQL from the basics. Create databases, tables and relationships and perform real-world SQL operations.",

    learn: [
      "Database Fundamentals",
      "MySQL Installation & Setup",
      "Create Databases & Tables",
      "SQL SELECT & INSERT Queries",
      "UPDATE & DELETE Operations",
      "Primary & Foreign Keys",
    ],

    curriculum: [
      "Database Fundamentals",
      "MySQL Setup",
      "Tables & Relationships",
      "SQL Queries",
      "Keys & Constraints",
      "Practical Database Project",
    ],
  },

  // ---------------------------------------------------
  // NETWORKING
  // ---------------------------------------------------

  networking: {
    category: "Networking",

    title: "Computer Networking",

    image: "./assets/images/course-networking.jpg",

    rating: "4.8",

    students: "76 Students",

    price: "$42",

    duration: "7 Weeks",

    lessons: "32 Lessons",

    level: "Intermediate",

    description:
      "Understand computer networking concepts including network devices, IP addressing, protocols, LAN, WAN and basic network troubleshooting.",

    learn: [
      "Networking Fundamentals",
      "LAN, WAN & MAN",
      "IP Addressing",
      "Network Devices",
      "TCP/IP Protocols",
      "Basic Network Troubleshooting",
    ],

    curriculum: [
      "Introduction to Networking",
      "Network Types & Topologies",
      "IP Addressing",
      "Networking Devices",
      "TCP/IP Model",
      "Network Troubleshooting",
    ],
  },

  // ---------------------------------------------------
  // GRAPHIC DESIGN
  // ---------------------------------------------------

  design: {
    category: "Design",

    title: "Graphic Design Masterclass",

    image: "./assets/images/course-graphic.jpg",

    rating: "4.9",

    students: "110 Students",

    price: "$45",

    duration: "6 Weeks",

    lessons: "30 Lessons",

    level: "Beginner - Advanced",

    description:
      "Learn the fundamentals of graphic design and create professional visual content for social media, websites, businesses and marketing.",

    learn: [
      "Design Fundamentals",
      "Color & Typography",
      "Layout & Composition",
      "Logo & Brand Design",
      "Social Media Graphics",
      "Real-World Design Projects",
    ],

    curriculum: [
      "Introduction to Graphic Design",
      "Color Theory & Typography",
      "Layout & Composition",
      "Logo Design",
      "Social Media Design",
      "Final Design Project",
    ],
  },

  // ---------------------------------------------------
  // COMPUTER FUNDAMENTALS
  // ---------------------------------------------------

  computer: {
    category: "Computer",

    title: "Computer Fundamentals",

    image: "./assets/images/course-computer.jpg",

    rating: "4.8",

    students: "140 Students",

    price: "$29",

    duration: "4 Weeks",

    lessons: "24 Lessons",

    level: "Beginner",

    description:
      "Learn essential computer skills from the beginning. Understand hardware, software, operating systems, files, folders and everyday computer usage.",

    learn: [
      "Computer Basics",
      "Hardware & Software",
      "Operating Systems",
      "Files & Folders",
      "Internet & Email Basics",
      "Essential Computer Skills",
    ],

    curriculum: [
      "Introduction to Computers",
      "Hardware & Software",
      "Operating Systems",
      "Files & Folders",
      "Internet & Email",
      "Practical Computer Skills",
    ],
  },
};

// =====================================================
// LOAD COURSE DETAILS
// =====================================================

const urlParams = new URLSearchParams(window.location.search);

const selectedCourse = urlParams.get("course");

if (selectedCourse && courseData[selectedCourse]) {
  const course = courseData[selectedCourse];

  // ---------------------------------------------------
  // BASIC COURSE INFORMATION
  // ---------------------------------------------------

  const titleElement = document.querySelector(".course-details-title");

  const imageElement = document.querySelector(".course-details-image img");

  const categoryElement = document.querySelector(".details-category");

  const ratingElement = document.querySelector(".details-rating strong");

  const studentsElement = document.querySelector(".details-rating span");

  const priceElement = document.querySelector(".details-price");

  // Title
  if (titleElement) {
    titleElement.textContent = course.title;
  }

  // Image
  if (imageElement) {
    imageElement.src = course.image;

    imageElement.alt = course.title;
  }

  // Category
  if (categoryElement) {
    categoryElement.textContent = course.category;
  }

  // Rating
  if (ratingElement) {
    ratingElement.textContent = course.rating;
  }

  // Students
  if (studentsElement) {
    studentsElement.textContent = `(${course.students})`;
  }

  // Price
  if (priceElement) {
    priceElement.textContent = course.price;
  }

  // Browser title
  document.title = `${course.title} - EduPro`;

  // ---------------------------------------------------
  // COURSE DESCRIPTION
  // ---------------------------------------------------

  const descriptionElements = document.querySelectorAll(".course-details-text");

  if (descriptionElements.length > 0) {
    descriptionElements[0].textContent = course.description;
  }

  // ---------------------------------------------------
  // WHAT YOU'LL LEARN
  // ---------------------------------------------------

  const learnItems = document.querySelectorAll(".learn-item");

  learnItems.forEach((item, index) => {
    const textElement = item.querySelector("span");

    if (textElement && course.learn[index]) {
      textElement.textContent = course.learn[index];
    }
  });

  // ---------------------------------------------------
  // COURSE CURRICULUM
  // ---------------------------------------------------

  const curriculumItems = document.querySelectorAll(".curriculum-item");

  curriculumItems.forEach((item, index) => {
    const titleElement = item.querySelector(".lesson-title");

    if (titleElement && course.curriculum[index]) {
      titleElement.textContent = course.curriculum[index];
    }
  });

  // ---------------------------------------------------
  // COURSE INFORMATION
  // ---------------------------------------------------

  const infoItems = document.querySelectorAll(".info-item");

  if (infoItems.length >= 3) {
    // Duration
    const durationValue = infoItems[0].querySelector("strong");

    if (durationValue) {
      durationValue.textContent = course.duration;
    }

    // Lessons
    const lessonsValue = infoItems[1].querySelector("strong");

    if (lessonsValue) {
      lessonsValue.textContent = course.lessons;
    }

    // Level
    const levelValue = infoItems[2].querySelector("strong");

    if (levelValue) {
      levelValue.textContent = course.level;
    }
  }
}

/* =====================================================
   STUDENT SEARCH & FILTER
====================================================== */

const studentSearch = document.getElementById("studentSearch");
const studentFilter = document.getElementById("studentFilter");
const studentItems = document.querySelectorAll(".student-item");
const studentCountNumber = document.querySelector(".student-count-number");
const noStudentFound = document.getElementById("noStudentFound");
const resetStudentSearch = document.getElementById("resetStudentSearch");

function filterStudents() {
  const searchValue = studentSearch.value.toLowerCase().trim();
  const filterValue = studentFilter.value;

  let visibleCount = 0;

  studentItems.forEach(function (item) {
    const studentName = item.querySelector("h3").textContent.toLowerCase();

    const studentDescription = item
      .querySelector(".student-content > p")
      .textContent.toLowerCase();

    const studentCourse = item.getAttribute("data-course");

    const matchesSearch =
      studentName.includes(searchValue) ||
      studentDescription.includes(searchValue);

    const matchesFilter =
      filterValue === "all" || studentCourse === filterValue;

    if (matchesSearch && matchesFilter) {
      item.classList.remove("student-hidden");
      visibleCount++;
    } else {
      item.classList.add("student-hidden");
    }
  });

  /* Update Count */

  if (studentCountNumber) {
    studentCountNumber.textContent = String(visibleCount).padStart(2, "0");
  }

  /* Show / Hide No Result */

  if (noStudentFound) {
    if (visibleCount === 0) {
      noStudentFound.style.display = "block";
    } else {
      noStudentFound.style.display = "none";
    }
  }
}

/* Search */

if (studentSearch) {
  studentSearch.addEventListener("input", filterStudents);
}

/* Filter */

if (studentFilter) {
  studentFilter.addEventListener("change", filterStudents);
}

/* Reset */

if (resetStudentSearch) {
  resetStudentSearch.addEventListener("click", function () {
    studentSearch.value = "";
    studentFilter.value = "all";

    filterStudents();
  });
}

/* =====================================================
   STUDENT DETAILS MODAL
====================================================== */

const studentTriggers = document.querySelectorAll(".student-details-trigger");

const modalStudentImage = document.getElementById("modalStudentImage");

const modalStudentCourse = document.getElementById("modalStudentCourse");

const modalStudentName = document.getElementById("modalStudentName");

const modalStudentDescription = document.getElementById(
  "modalStudentDescription",
);

const modalStudentLevel = document.getElementById("modalStudentLevel");

const modalStudentBatch = document.getElementById("modalStudentBatch");

const studentDetailsModal = document.getElementById("studentDetailsModal");

if (studentDetailsModal) {
  const studentModal = new bootstrap.Modal(studentDetailsModal);

  studentTriggers.forEach(function (card) {
    card.addEventListener("click", function () {
      const image = this.querySelector(".student-image").getAttribute("src");

      const course = this.getAttribute("data-course");

      const name = this.querySelector("h3").textContent.trim();

      const description = this.querySelector(
        ".student-content > p",
      ).textContent.trim();

      const metaItems = this.querySelectorAll(".student-meta span");

      const level = metaItems[0].textContent.replace("Level:", "").trim();

      const batch = metaItems[1].textContent.replace("Batch", "").trim();

      modalStudentImage.src = image;
      modalStudentImage.alt = name;

      modalStudentCourse.textContent = course;
      modalStudentName.textContent = name;
      modalStudentDescription.textContent = description;
      modalStudentLevel.textContent = level;
      modalStudentBatch.textContent = batch;

      studentModal.show();
    });
  });
}

/* =========================================================
   NOTICE PAGE
========================================================= */

const noticeSearch = document.getElementById("noticeSearch");
const noticeFilterButtons = document.querySelectorAll(".notice-filter-btn");
const noticeItems = document.querySelectorAll(".notice-item");
const noNoticeFound = document.getElementById("noNoticeFound");

const noticeModal = document.getElementById("noticeModal");
const noticeModalClose = document.getElementById("noticeModalClose");

const modalNoticeTitle = document.getElementById("modalNoticeTitle");
const modalNoticeDate = document.getElementById("modalNoticeDate");
const modalNoticeCategory = document.getElementById("modalNoticeCategory");
const modalNoticeDescription = document.getElementById(
  "modalNoticeDescription",
);

let selectedNoticeCategory = "all";

/* ================= Notice Filter ================= */

function filterNotices() {
  const searchValue = noticeSearch
    ? noticeSearch.value.toLowerCase().trim()
    : "";

  let visibleCount = 0;

  noticeItems.forEach(function (notice) {
    const category = notice.getAttribute("data-category");
    const title = notice.getAttribute("data-title").toLowerCase();

    const categoryMatch =
      selectedNoticeCategory === "all" || category === selectedNoticeCategory;

    const searchMatch = title.includes(searchValue);

    if (categoryMatch && searchMatch) {
      notice.style.display = "";

      visibleCount++;
    } else {
      notice.style.display = "none";
    }
  });

  /* ================= No Result ================= */

  if (noNoticeFound) {
    if (visibleCount === 0) {
      noNoticeFound.classList.add("show");
    } else {
      noNoticeFound.classList.remove("show");
    }
  }
}

/* ================= Filter Buttons ================= */

noticeFilterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    noticeFilterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    this.classList.add("active");

    selectedNoticeCategory = this.getAttribute("data-filter");

    filterNotices();
  });
});

/* ================= Search ================= */

if (noticeSearch) {
  noticeSearch.addEventListener("input", function () {
    filterNotices();
  });
}

/* ================= Read More Modal ================= */

const noticeReadButtons = document.querySelectorAll(".notice-read-btn");

noticeReadButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const title = this.getAttribute("data-title");
    const date = this.getAttribute("data-date");
    const category = this.getAttribute("data-category");
    const description = this.getAttribute("data-description");

    if (modalNoticeTitle) {
      modalNoticeTitle.textContent = title;
    }

    if (modalNoticeDate) {
      modalNoticeDate.textContent = date;
    }

    if (modalNoticeCategory) {
      modalNoticeCategory.textContent = category;
    }

    if (modalNoticeDescription) {
      modalNoticeDescription.textContent = description;
    }

    if (noticeModal) {
      noticeModal.classList.add("show");
      noticeModal.setAttribute("aria-hidden", "false");

      document.body.style.overflow = "hidden";
    }
  });
});

/* ================= Close Modal ================= */

function closeNoticeModal() {
  if (!noticeModal) {
    return;
  }

  noticeModal.classList.remove("show");

  noticeModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

if (noticeModalClose) {
  noticeModalClose.addEventListener("click", closeNoticeModal);
}

/* ================= Close by Background ================= */

if (noticeModal) {
  noticeModal.addEventListener("click", function (event) {
    if (event.target === noticeModal) {
      closeNoticeModal();
    }
  });
}

/* ================= Close by ESC ================= */

document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    noticeModal &&
    noticeModal.classList.contains("show")
  ) {
    closeNoticeModal();
  }
});

/* =========================================================
   CONTACT PAGE
========================================================= */

const contactForm = document.getElementById("contactForm");
const contactSuccessMessage = document.getElementById("contactSuccessMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    /* ================= Get Form Values ================= */

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    /* ================= Basic Validation ================= */

    if (!name || !email || !subject || !message) {
      alert("Please fill in all required fields.");

      return;
    }

    /* ================= Email Validation ================= */

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");

      return;
    }

    /* ================= Success ================= */

    if (contactSuccessMessage) {
      contactSuccessMessage.classList.add("show");
    }

    /* ================= Reset Form ================= */

    contactForm.reset();

    /* ================= Hide Success Message ================= */

    setTimeout(function () {
      if (contactSuccessMessage) {
        contactSuccessMessage.classList.remove("show");
      }
    }, 5000);
  });
}
