  document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
      const target = event.target;
      const data = {
        tag: target.tagName,
        id: target.id || null,
        classes: target.className || null,
        timestamp: new Date().toISOString()
      };
      console.log(data);
    });
  });


  // Uruchomienie np. po załadowaniu strony
  document.addEventListener("DOMContentLoaded", () => {
    initScrollTracking(); // możesz podać inny endpoint lub krok np. initScrollTracking("/track", 5);
  });
