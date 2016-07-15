class AddHtmlContentColumnToSections < ActiveRecord::Migration
  def change
    add_column :sections, :html_content, :text
  end
end
