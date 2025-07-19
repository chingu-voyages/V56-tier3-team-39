# Voyage Tasks

Welcome to the Voyage Team 39 project! This document will help you get started, set up the project, and understand our team structure.

---

## 📄 Team Documents

Helpful resources for organizing and collaborating:

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

**Meeting Agenda Templates** (in `/docs`):

- [Voyage Kickoff](./docs/meeting-voyage_kickoff.docx)
- [App Vision & Feature Planning](./docs/meeting-vision_and_feature_planning.docx)
- [Sprint Retrospective, Review, and Planning](./docs/meeting-sprint_retrospective_review_and_planning.docx)
- [Sprint Open Topic Session](./docs/meeting-sprint_open_topic_session.docx)

---

## 👥 Our Team

Meet our awesome team! Connect with us on GitHub and LinkedIn:

- **Ryan Anderson**: [GitHub]() / [LinkedIn]()
- **Kris**: [GitHub]() / [LinkedIn]()
- **Aja**: [GitHub]() / [LinkedIn]()
- **Eoin McDonnell**: [GitHub](https://github.com/oldmcdonnell) / [LinkedIn](https://www.linkedin.com/in/mcdonnell-eoin/)

---

## 🚀 Project Setup

### Server Setup

**Python Version:**  
Use Python **3.12.3** (do not use newer versions; Flask compatibility issues).

#### Install Python

**Linux:**
```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv -y
```

**Windows:**  
Download and install from [python.org](https://www.python.org/downloads/release/python-3123/)

**With pyenv (Linux/macOS):**
```bash
pyenv install 3.12.3
pyenv global 3.12.3
```

#### Create and Activate Virtual Environment

```bash
cd server
python3 -m venv env_socket
source env_socket/bin/activate
```
*On Windows:*
```
env_socket\Scripts\activate
```

#### Install Dependencies

```bash
pip install -r requirements.txt
python -m pip install --upgrade pip
```

#### Run the Server

```bash
gunicorn -k geventwebsocket.gunicorn.workers.GeventWebSocketWorker -w 1 app_socket.app_socket_server:app --bind 0.0.0.0:5000
```

#### Test the Server

```bash
curl http://localhost:5000/members
```
Expected response:
```json
{"members":["Member1","Member2","Member3"]}
```

---

### Client Setup

```bash
npm install
```
*(Add more client setup instructions here as needed)*

---

## 📝 Additional Notes

- Use [Keys to a well written README](https://tinyurl.com/yk3wubft) as a reference for improving this file.
- Replace placeholder links and add more project-specific details as the project evolves.

---

## 🔗 References

- [Socket.IO Python Docs](https://python-socketio.readthedocs.io/en/stable/intro.html#what-is-socket-io)
- [Gevent Documentation](https://www.gevent.org/api/index.html)
- [Gunicorn Documentation](https://docs.gunicorn.org/en/stable/)
- [YouTube: Flask, Socket.IO, Gunicorn, Gevent Setup](https://www.youtube.com/watch?v=7LNl2JlZKHA)

---

## 🖥️ Virtual Machine & Parrot OS Setup (Optional)

### Install VMware

- [VMware Download Link](https://drive.google.com/file/d/1VQZilVojcY1aohbFgCQYXrXsCF1c1cZr/view?usp=sharing)

### Install Parrot OS on Windows (via VMware)

1. **Download Parrot OS ISO**  
   [Parrot Security Edition ISO](https://www.parrotsec.org/download/)

2. **Create a New Virtual Machine in VMware Workstation**
   - Open VMware Workstation.
   - Click "Create a New Virtual Machine".
   - Choose Typical (recommended) > Next.
   - Select "Installer disc image file (iso)" and browse to your downloaded Parrot ISO.
   - Choose Linux as the guest OS and select Debian 64-bit.
   - Name your VM and set the location.
   - Allocate at least:
     - 2 cores (if available)
     - 4096 MB RAM (or more)
     - 20 GB Disk (split or single file)

3. **Install the OS**
   - Power on the VM.
   - Select Install or Graphical Install.
   - Follow the on-screen instructions.
   - Set root password/user account, locale, keyboard layout, and disk partitioning.

4. **VM Tools & Networking**
   - (Optional) Install VMware Tools from the VM menu.
   - Ensure networking is set to NAT or Bridged as