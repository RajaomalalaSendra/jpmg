require 'test_helper'

class ThesaurusControllerTest < ActionDispatch::IntegrationTest
  test "should get japanese" do
    get thesaurus_japanese_url
    assert_response :success
  end

  test "should get french" do
    get thesaurus_french_url
    assert_response :success
  end

end
