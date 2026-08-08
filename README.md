

# Django AsyncMailer

**Django AsyncMailer** is a reusable Django application designed for asynchronous email delivery. It provides robust email templating, multi-provider SMTP management with quota and blacklist controls, and scheduled/deferred email sending, all powered by Celery for background task processing.

## Features
- **Asynchronous Dispatch:** Send emails in the background using Celery to avoid blocking request/response cycles.
- **Multi-Provider SMTP Support:** Manage multiple SMTP servers with customizable preferences, daily/monthly quotas, and domain blacklists.
- **Smart Templating:** Store and render HTML email templates directly in the database. Supports automatic inline CSS conversion (`premailer`) and plain-text fallback generation (`html2text`).
- **Deferred & Scheduled Emails:** Queue emails for future delivery with automatic background processing via Celery periodic tasks.
- **Built-in Web UI:** Preview email templates, inject context payloads, toggle inline styles, and send test emails directly from the browser.
- **Django Admin Integration:** Fully integrated admin interface for managing SMTP providers, email templates, and pending deferred mails.

## Installation

### Via pip
```bash
pip install django-asyncmailer
```

### From Source
```bash
git clone https://github.com/andyfangdz/django-asyncmailer.git
cd django-asyncmailer
pip install -e .
```

## Configuration

1. **Add to Installed Apps**
   Add `asyncmailer` to your `INSTALLED_APPS` in `settings.py`:
   ```python
   INSTALLED_APPS = [
       # ...
       'asyncmailer',
   ]
   ```

2. **Include URLs**
   Add the app's URL patterns to your project's `urls.py`:
   ```python
   from django.conf.urls import include, url
   
   urlpatterns = [
       url(r'^asyncmailer/', include('asyncmailer.urls')),
       # ...
   ]
   ```

3. **Configure Celery**
   Ensure your Celery configuration is set up with a message broker (e.g., Redis or RabbitMQ). The app relies on `@shared_task` and `@periodic_task` decorators.
   ```python
   # celery.py
   from celery import Celery
   app = Celery('your_project_name')
   app.config_from_object('django.conf:settings', namespace='CELERY')
   app.autodiscover_tasks()
   ```

4. **Run Migrations**
   ```bash
   python manage.py migrate asyncmailer
   ```

5. **Set Up SMTP Providers**
   Visit your Django admin (`/admin/`), create `Provider` instances, and configure your SMTP credentials, from addresses, quotas, and blacklists.

## Usage

### Sending Asynchronous Emails
Import and use the `async_mail` task to send immediate emails:
```python
from asyncmailer.tasks import async_mail

async_mail(
    email=["user@example.com"],
    title="Welcome to Our Service",
    context_dict={"username": "newuser", "token": "abc123"},
    template="email-templates/email.html",
    attachments=["path/to/file.pdf"]
)
```

### Scheduling Deferred Emails
Use `add_deferred_mail` to queue an email for future delivery. A Celery periodic task will automatically pick it up when the scheduled time arrives.
```python
from asyncmailer.tasks import add_deferred_mail
from datetime import timedelta

add_deferred_mail(
    email="user@example.com",
    title="Scheduled Reminder",
    template_name="my_custom_template",
    key="unique_key_for_this_mail",
    delta=timedelta(hours=2),  # Send in 2 hours
    context_dict={"message": "This is a delayed email."}
)
```

### Canceling a Deferred Email
```python
from asyncmailer.tasks import remove_deferred_mail
remove_deferred_mail("unique_key_for_this_mail")
```

## Web Interface
Navigate to `/asyncmailer/` in your browser to access the management UI. Here you can:
- Select an email template and variation
- Input JSON context payloads
- Toggle inline CSS styling and HTML/TEXT formats
- Preview the rendered email in an iframe
- Send test emails to a specified address or upload a JSON file for batch testing

## Dependencies
- Django (Tested with 1.7 - 1.9)
- Celery
- jsonfield
- html2text
- premailer
- Bootstrap 3 & jQuery (for the management UI)

## License & Author
**Author:** Dezhi “Andy” Fang  
**License:** MIT License  
**Repository:** [https://github.com/andyfangdz/django-asyncmailer](https://github.com/andyfangdz/django-asyncmailer)
