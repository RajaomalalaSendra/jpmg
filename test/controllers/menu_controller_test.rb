require 'test_helper'

class MenuControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get menu_index_url
    assert_response :success
  end

  test "should get thesaurus" do
    get menu_thesaurus_url
    assert_response :success
  end

  test "should get proverbs" do
    get menu_proverbs_url
    assert_response :success
  end

  test "should get machinetranslation" do
    get menu_machinetranslation_url
    assert_response :success
  end

end
