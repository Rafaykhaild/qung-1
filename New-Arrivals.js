document.addEventListener("DOMContentLoaded", function () {
    // Categories Section Interactivity
    const categoryItems = document.querySelectorAll(".category-item");
    categoryItems.forEach((item) => {
      item.addEventListener("click", function () {
        // In a real implementation, this would navigate to the category page
        const categoryName =
          this.querySelector(".category-label").textContent;
        console.log(`Navigating to ${categoryName} category`);
        // window.location.href = `/category/${categoryName.toLowerCase().replace(' ', '-')}`;
      });
    });

    const moreLinks = document.querySelectorAll(".more-link");
    moreLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // In a real implementation, this would show more information or navigate to details page
        console.log("Showing more information");
      });
    });

    // Products Section Interactivity
    // Toggle category dropdown
    const categoryHeaders = document.querySelectorAll(".category-header");
    categoryHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const nextElement = this.nextElementSibling;
        if (
          nextElement &&
          !nextElement.classList.contains("category-title")
        ) {
          nextElement.style.display =
            nextElement.style.display === "none" ? "block" : "none";
        }
      });
    });

    // Size box selection
    const sizeBoxes = document.querySelectorAll(".size-box");
    sizeBoxes.forEach((box) => {
      box.addEventListener("click", function () {
        // Toggle active class
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
          this.style.backgroundColor = "#eee";
        } else {
          this.style.backgroundColor = "";
        }
      });
    });

    // Color circle selection
    const colorCircles = document.querySelectorAll(".color-circle");
    colorCircles.forEach((circle) => {
      circle.addEventListener("click", function () {
        // Toggle active class
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
          this.style.border = "2px solid #333";
        } else {
          this.style.border = "1px solid #eee";
        }
      });
    });

    // Search button click
    const searchButton = document.querySelector(".search-button");
    searchButton.addEventListener("click", function () {
      console.log("Filtering products based on selected criteria");
      // In a real implementation, this would filter products based on selected criteria
    });

    // Sort dropdown change
    const sortDropdown = document.querySelector(".sort-dropdown");
    sortDropdown.addEventListener("change", function () {
      console.log(`Sorting products by: ${this.value}`);
      // In a real implementation, this would sort products based on selected option
    });

    // Add to cart button click
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const productTitle =
          this.parentElement.querySelector(".product-title").textContent;
        console.log(`Added ${productTitle} to cart`);
        // In a real implementation, this would add the product to cart

        // Show a quick confirmation message
        const confirmMessage = document.createElement("div");
        confirmMessage.textContent = "カートに追加しました！";
        confirmMessage.style.position = "fixed";
        confirmMessage.style.top = "20px";
        confirmMessage.style.left = "50%";
        confirmMessage.style.transform = "translateX(-50%)";
        confirmMessage.style.backgroundColor = "#333";
        confirmMessage.style.color = "white";
        confirmMessage.style.padding = "10px 20px";
        confirmMessage.style.borderRadius = "5px";
        confirmMessage.style.zIndex = "1000";

        document.body.appendChild(confirmMessage);

        // Remove the message after 3 seconds
        setTimeout(() => {
          document.body.removeChild(confirmMessage);
        }, 3000);
      });
    });

    // Pagination click
    const pageNumbers = document.querySelectorAll(".page-number");
    pageNumbers.forEach((number) => {
      number.addEventListener("click", function () {
        // Remove active class from all page numbers
        pageNumbers.forEach((num) => num.classList.remove("active"));

        // Add active class to clicked page number
        this.classList.add("active");

        console.log(`Navigating to page ${this.textContent}`);
        // In a real implementation, this would load products for the selected page
      });
    });

    // Next page click
    const nextPage = document.querySelector(".next-page");
    nextPage.addEventListener("click", function () {
      // Find the currently active page
      const activePage = document.querySelector(".page-number.active");
      const currentPage = parseInt(activePage.textContent);

      // Find the next page element
      const nextPageElement = document.querySelector(
        `.page-number:nth-child(${currentPage + 1})`
      );

      if (nextPageElement) {
        // Remove active class from current page
        activePage.classList.remove("active");

        // Add active class to next page
        nextPageElement.classList.add("active");

        console.log(`Navigating to page ${nextPageElement.textContent}`);
        // In a real implementation, this would load products for the next page
      }
    });

    // Product image hover effect
    const productImages = document.querySelectorAll(".product-image");
    productImages.forEach((image) => {
      image.addEventListener("mouseenter", function () {
        this.querySelector("img").style.transform = "scale(1.05)";
      });

      image.addEventListener("mouseleave", function () {
        this.querySelector("img").style.transform = "";
      });
    });

    // Mobile sidebar toggle (for responsive design)
    // This would be implemented with additional HTML elements in a real project
    function setupMobileMenu() {
      if (window.innerWidth <= 768) {
        // Create mobile menu button if it doesn't exist
        if (!document.querySelector(".mobile-menu-toggle")) {
          const menuToggle = document.createElement("div");
          menuToggle.className = "mobile-menu-toggle";
          menuToggle.innerHTML = "☰";
          menuToggle.style.position = "fixed";
          menuToggle.style.top = "10px";
          menuToggle.style.left = "10px";
          menuToggle.style.fontSize = "24px";
          menuToggle.style.zIndex = "1000";
          menuToggle.style.cursor = "pointer";

          document.body.appendChild(menuToggle);

          // Toggle sidebar visibility
          menuToggle.addEventListener("click", function () {
            const sidebar = document.querySelector(".sidebar");
            sidebar.style.display =
              sidebar.style.display === "none" ? "block" : "none";
          });

          // Hide sidebar by default on mobile
          document.querySelector(".sidebar").style.display = "none";
        }
      } else {
        // Remove mobile menu button if exists
        const menuToggle = document.querySelector(".mobile-menu-toggle");
        if (menuToggle) {
          document.body.removeChild(menuToggle);
        }

        // Make sure sidebar is visible on desktop
        document.querySelector(".sidebar").style.display = "block";
      }
    }

    // Run initially and on window resize
    setupMobileMenu();
    window.addEventListener("resize", setupMobileMenu);
  });document.addEventListener("DOMContentLoaded", function () {
        // Categories Section Interactivity
        const categoryItems = document.querySelectorAll(".category-item");
        categoryItems.forEach((item) => {
          item.addEventListener("click", function () {
            // In a real implementation, this would navigate to the category page
            const categoryName =
              this.querySelector(".category-label").textContent;
            console.log(`Navigating to ${categoryName} category`);
            // window.location.href = `/category/${categoryName.toLowerCase().replace(' ', '-')}`;
          });
        });

        const moreLinks = document.querySelectorAll(".more-link");
        moreLinks.forEach((link) => {
          link.addEventListener("click", function () {
            // In a real implementation, this would show more information or navigate to details page
            console.log("Showing more information");
          });
        });

        // Products Section Interactivity
        // Toggle category dropdown
        const categoryHeaders = document.querySelectorAll(".category-header");
        categoryHeaders.forEach((header) => {
          header.addEventListener("click", function () {
            const nextElement = this.nextElementSibling;
            if (
              nextElement &&
              !nextElement.classList.contains("category-title")
            ) {
              nextElement.style.display =
                nextElement.style.display === "none" ? "block" : "none";
            }
          });
        });

        // Size box selection
        const sizeBoxes = document.querySelectorAll(".size-box");
        sizeBoxes.forEach((box) => {
          box.addEventListener("click", function () {
            // Toggle active class
            this.classList.toggle("active");
            if (this.classList.contains("active")) {
              this.style.backgroundColor = "#eee";
            } else {
              this.style.backgroundColor = "";
            }
          });
        });

        // Color circle selection
        const colorCircles = document.querySelectorAll(".color-circle");
        colorCircles.forEach((circle) => {
          circle.addEventListener("click", function () {
            // Toggle active class
            this.classList.toggle("active");
            if (this.classList.contains("active")) {
              this.style.border = "2px solid #333";
            } else {
              this.style.border = "1px solid #eee";
            }
          });
        });

        // Search button click
        const searchButton = document.querySelector(".search-button");
        searchButton.addEventListener("click", function () {
          console.log("Filtering products based on selected criteria");
          // In a real implementation, this would filter products based on selected criteria
        });

        // Sort dropdown change
        const sortDropdown = document.querySelector(".sort-dropdown");
        sortDropdown.addEventListener("change", function () {
          console.log(`Sorting products by: ${this.value}`);
          // In a real implementation, this would sort products based on selected option
        });

        // Add to cart button click
        const addToCartButtons = document.querySelectorAll(".add-to-cart");
        addToCartButtons.forEach((button) => {
          button.addEventListener("click", function () {
            const productTitle =
              this.parentElement.querySelector(".product-title").textContent;
            console.log(`Added ${productTitle} to cart`);
            // In a real implementation, this would add the product to cart

            // Show a quick confirmation message
            const confirmMessage = document.createElement("div");
            confirmMessage.textContent = "カートに追加しました！";
            confirmMessage.style.position = "fixed";
            confirmMessage.style.top = "20px";
            confirmMessage.style.left = "50%";
            confirmMessage.style.transform = "translateX(-50%)";
            confirmMessage.style.backgroundColor = "#333";
            confirmMessage.style.color = "white";
            confirmMessage.style.padding = "10px 20px";
            confirmMessage.style.borderRadius = "5px";
            confirmMessage.style.zIndex = "1000";

            document.body.appendChild(confirmMessage);

            // Remove the message after 3 seconds
            setTimeout(() => {
              document.body.removeChild(confirmMessage);
            }, 3000);
          });
        });

        // Pagination click
        const pageNumbers = document.querySelectorAll(".page-number");
        pageNumbers.forEach((number) => {
          number.addEventListener("click", function () {
            // Remove active class from all page numbers
            pageNumbers.forEach((num) => num.classList.remove("active"));

            // Add active class to clicked page number
            this.classList.add("active");

            console.log(`Navigating to page ${this.textContent}`);
            // In a real implementation, this would load products for the selected page
          });
        });

        // Next page click
        const nextPage = document.querySelector(".next-page");
        nextPage.addEventListener("click", function () {
          // Find the currently active page
          const activePage = document.querySelector(".page-number.active");
          const currentPage = parseInt(activePage.textContent);

          // Find the next page element
          const nextPageElement = document.querySelector(
            `.page-number:nth-child(${currentPage + 1})`
          );

          if (nextPageElement) {
            // Remove active class from current page
            activePage.classList.remove("active");

            // Add active class to next page
            nextPageElement.classList.add("active");

            console.log(`Navigating to page ${nextPageElement.textContent}`);
            // In a real implementation, this would load products for the next page
          }
        });

        // Product image hover effect
        const productImages = document.querySelectorAll(".product-image");
        productImages.forEach((image) => {
          image.addEventListener("mouseenter", function () {
            this.querySelector("img").style.transform = "scale(1.05)";
          });

          image.addEventListener("mouseleave", function () {
            this.querySelector("img").style.transform = "";
          });
        });

        // Mobile sidebar toggle (for responsive design)
        // This would be implemented with additional HTML elements in a real project
        function setupMobileMenu() {
          if (window.innerWidth <= 768) {
            // Create mobile menu button if it doesn't exist
            if (!document.querySelector(".mobile-menu-toggle")) {
              const menuToggle = document.createElement("div");
              menuToggle.className = "mobile-menu-toggle";
              menuToggle.innerHTML = "☰";
              menuToggle.style.position = "fixed";
              menuToggle.style.top = "10px";
              menuToggle.style.left = "10px";
              menuToggle.style.fontSize = "24px";
              menuToggle.style.zIndex = "1000";
              menuToggle.style.cursor = "pointer";

              document.body.appendChild(menuToggle);

              // Toggle sidebar visibility
              menuToggle.addEventListener("click", function () {
                const sidebar = document.querySelector(".sidebar");
                sidebar.style.display =
                  sidebar.style.display === "none" ? "block" : "none";
              });

              // Hide sidebar by default on mobile
              document.querySelector(".sidebar").style.display = "none";
            }
          } else {
            // Remove mobile menu button if exists
            const menuToggle = document.querySelector(".mobile-menu-toggle");
            if (menuToggle) {
              document.body.removeChild(menuToggle);
            }

            // Make sure sidebar is visible on desktop
            document.querySelector(".sidebar").style.display = "block";
          }
        }

        // Run initially and on window resize
        setupMobileMenu();
        window.addEventListener("resize", setupMobileMenu);
      });