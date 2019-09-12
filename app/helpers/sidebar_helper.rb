module SidebarHelper
  def active_class?(test_path)
    request.path == test_path ? 'active' : ''
  end

  def aria_expanded?(category)
    @category == category ? 'true' : 'false'
  end

  def menu_show?(category)
    @category == category ? 'show' : ''
  end
end
