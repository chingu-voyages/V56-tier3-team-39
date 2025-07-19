# voyage-tasks

Your project's `readme` is as important to success as your code. For 
this reason you should put as much care into its creation and maintenance
as you would any other component of the application.

If you are unsure of what should go into the `readme` let this article,
written by an experienced Chingu, be your starting point - 
[Keys to a well written README](https://tinyurl.com/yk3wubft).

And before we go there's "one more thing"! Once you decide what to include
in your `readme` feel free to replace the text we've provided here.

> Own it & Make it your Own!

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx

## Our Team

## Our Team

Meet our awesome team! Everyone has added their GitHub and LinkedIn profiles for easy access.

- **Ryan Anderson**: [GitHub]() / [LinkedIn]()
- **Kris**: [GitHub]() / [LinkedIn]()
- **Aja**: [GitHub]() / [LinkedIn]()
- **Eoin McDonnell**: [GitHub](https://github.com/oldmcdonnell) / [LinkedIn](https://www.linkedin.com/in/mcdonnell-eoin/)


## Setup

## server setup

Python version Python 3.12.3 is stable do not use the latest version of python. 

Bash
   -pyenv install 3.12.3
   -pyenv global 3.12.3

windows 
   -install https://www.python.org/downloads/release/python-3123/

no later version is stable for flask at this time

cd server
python -m venv venv
# Activate virtual environment:
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

make sure you have this interpreter selected (i.e. D:\GitHub\V56-tier3-team-39\server\env_socket\Scripts\python.exe
)


pip install -r requirements.txt
python -m pip install --upgrade pip


✅ gunicorn — your production WSGI server

✅ gevent — async worker class (no need for eventlet)

✅ greenlet — already satisfied


## client setup

npm 