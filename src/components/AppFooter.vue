<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-logo">
        <div class="logo-circle">
          <span class="logo-text">Trip<span style="color: orange;">Day</span></span>
        </div>
        <p>© Copyright</p>
      </div>
      <div class="footer-contacts">
        <p><strong>Our email:</strong> tripday@tripday.kz</p>
        <p><strong>Our phone:</strong> +77716774185</p>
        <p><strong>Our instagram:</strong> @tripday-kz</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>

.app-footer {
  background-color: #f56326;
  color: white;
  padding: 20px 40px;
  text-align: center;
  margin-top: 5rem;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}


.footer-logo {
  text-align: center;
}

.logo-circle {
  background-color: #ddd;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 10px;
}

.logo-text {
  font-size: 16px;
  font-weight: bold;
  color: #222;
}

.footer-logo p {
  font-size: 14px;
  margin-top: 5px;
}

.footer-contacts {
  text-align: left;
  font-size: 14px;
  line-height: 1.8;
}

.footer-contacts p {
  margin: 5px 0;
}

.footer-contacts strong {
  font-weight: bold;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
  }
  .footer-contacts {
    text-align: center;
  }
}
</style>
