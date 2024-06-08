<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCdZkES6ukBNSmJmyGrsTS35hi-nP9x47U",
    authDomain: "otm-training.firebaseapp.com",
    projectId: "otm-training",
    storageBucket: "otm-training.appspot.com",
    messagingSenderId: "644851084656",
    appId: "1:644851084656:web:aaa99e4928f68b1f43b3b5",
    measurementId: "G-4JLRT11V5F"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
