class GuideMailer < ApplicationMailer
  default from: 'thistyleguide@gmail.com'

  def send_guide(guide)
    @guide = guide
    @recipient_email = @guide.recipient_email
    @author = @guide.author
    mail(to: @recipient_email, subject: "You've received a styleguide from #{@author}")
  end

end
