# Rock-Paper-Scissors AI with Real-Time Gesture Recognition

This project implements a real-time Rock-Paper-Scissors game using deep learning and computer vision. It leverages a Convolutional Neural Network (CNN) trained on hand gesture images to recognize and classify player moves in real time using a webcam.

---

### 🎯 Project Highlights
- Built with TensorFlow, Keras, OpenCV, and scikit-learn.
- Real-time gesture prediction using a webcam interface.
- Multiple CNN architectures trained, evaluated, and compared.
- Interactive player-vs-player gameplay logic.
- Automated gesture recognition and result declaration.
- Clean, modular design for model training, testing, and deployment.

---

### 🤖 AI Model
- **Input:** Live webcam frame (300x200, RGB).
- **Output:** One of three gestures — `rock`, `paper`, or `scissors`.
- **Training:** Custom CNN with dropout, batch normalization, and data augmentation.
- **Evaluation:** Accuracy metrics, classification reports, and confusion matrices.

---

### 🛠 Technologies Used
- Python
- TensorFlow / Keras
- OpenCV
- scikit-learn
- NumPy
- Matplotlib

---

### 🕹 How to Use
1. Load the trained `.keras` model.
2. Run the `CaptureImage()` function to launch webcam interaction.
3. Make hand gestures — the AI will predict and evaluate the result.
4. Real-time classification and winner announcement.

---

### 📁 Project Structure
- `model_training.py` – CNN model building and training
- `inference.py` – Prediction and preprocessing functions
- `rps_game.py` – Game logic and real-time webcam controller
- `CNN_model_Team1.keras` – Pretrained model file

---

### 🧠 Skills Demonstrated
- Deep learning model development and optimization
- Computer vision with OpenCV
- One-hot encoding and stratified dataset splitting
- Model evaluation and visualization
- Real-time AI deployment with user interaction

---

### 📘 About This Project

This project was developed during a **Data Science and AI course** at **Khalifa University**, as part of the **Tumooh National Service Program**. It demonstrates my applied skills in machine learning, computer vision, and interactive AI systems while actively serving in the national service. The goal was to integrate AI into a real-time environment with full pipeline ownership — from dataset to deployment.

---

📌 Ideal for undergraduate AI portfolios, MBZUAI applications, or real-world AI deployment demonstrations.
