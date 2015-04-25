from django.test import TestCase
from .models import Provider
from .tasks import clear_daily_usages, clear_monthly_usages


# Create your tests here.
class ProviderTest(TestCase):
    """SMTP Provider Test"""

    def setUp(self):
        self.test_provider = Provider(
            enabled=True,
            smtp_host="localhost",
            smtp_port=587,
            smtp_username="",
            smtp_password="",
            use_tls=False,
            from_address="test@example.com",
            blacklist=[]
        )

    def test_can_send_normal(self):
        """
        Test if the provider can send a normal mail
        """
        self.assertEqual(self.test_provider.can_send("test@example.com"), True)

    def test_disabled(self):
        """
        Test if the provider works when disabled
        """
        self.test_provider.enabled = False
        self.assertEqual(self.test_provider.can_send("test@example.com"), False)
        self.test_provider.enabled = True

    def test_blacklist(self):
        """
        Test if the provider can send a mail to an address in the blacklist.
        """
        self.test_provider.blacklist = ["@qq.com"]
        self.assertEqual(self.test_provider.can_send("test@qq.com"), False)

    def test_over_quota(self):
        """
        Test if the provider works when out of quota
        """
        pre_usage = self.test_provider.usage
        self.test_provider.usage = self.test_provider.quota
        self.assertEqual(self.test_provider.can_send("test@example.com"), False)
        self.test_provider.usage = pre_usage

    def test_reset_usage(self):
        """
        Test if the provider resets usage
        """
        self.test_provider.usage = 10
        self.test_provider.reset_usage()
        self.assertEqual(self.test_provider.usage, 0)

    def test_usage_count(self):
        """
        Test if the provider works with usage counting
        """
        pre_usage = self.test_provider.usage
        self.test_provider.send("test@example.com", "Test", "Test")
        post_usage = self.test_provider.usage
        self.assertEqual(post_usage - pre_usage, 1)
        
    def test_clear_daily_usages(self):
        """
        Test if clear_daily_usages works
        """
        self.test_provider.quota_type_is_daily = True
        self.test_provider.usage = 100
        self.test_provider.save()
        clear_daily_usages()
        self.test_provider = Provider.objects.get(pk=self.test_provider.pk)
        self.assertEqual(self.test_provider.usage, 0)
    
    def test_clear_monthly_usages(self):
        """
        Test if clear_monthly_usages works
        """
        self.test_provider.quota_type_is_daily = False
        self.test_provider.usage = 100
        self.test_provider.save()
        clear_monthly_usages()
        self.test_provider = Provider.objects.get(pk=self.test_provider.pk)
        self.assertEqual(self.test_provider.usage, 0)

