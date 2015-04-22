import os
from setuptools import setup
from distutils.core import Command

with open(os.path.join(os.path.dirname(__file__), 'README.md')) as readme:
    README = readme.read()

class TestCommand(Command):
    user_options = []

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        from django.conf import settings
        settings.configure(DATABASES={'default': {'NAME': ':memory:',
            'ENGINE': 'django.db.backends.sqlite3'}},
            INSTALLED_APPS=('asyncmailer',))
        from django.core.management import call_command
        import django

        if django.VERSION[:2] >= (1, 7):
            django.setup()
        call_command('test', 'asyncmailer')

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='django-asyncmailer',
    version='0.2',
    packages=['asyncmailer'],
    include_package_data=True,
    license='MIT License',  # example license
    description='Async email solution w/ multiple SMTP credentials, load-balancing and blacklist.',
    long_description=README,
    url='https://github.com/yzmtf2008/django-asyncmailer',
    author='Andy Fang',
    author_email='andyfang.dz@gmail.com',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License', # example license
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        # Replace these appropriately if you are stuck on Python 2.
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
    install_requires=[
        'django-jsonfield',
        'django',
        'celery'
    ],
    cmdclass={'test': TestCommand},
)
