class CreateSections < ActiveRecord::Migration
  def change
    create_table :sections do |t|
      t.string :section_name
      t.string :css_rules

      t.timestamps null: false
    end
  end
end
