class SectionsController < ApplicationController

	# to show the template view
		def index
			@sections = Section.order(id: :asc)
		end


	# to update the database with the user input
		def update
			@section = Section.find ( params[:id] )
			@sections = Section.all

			if @section.update_attributes( section_params )
				redirect_to @sections
			else
				render 'index'
			end
		end

		def css
			@sections = Section.all

			@sections.each do |section|
				render text: "#{section.css_rules}".html_safe
			end
		end

		private

		def section_params
			params.require(:section).permit(:css_rules)
		end

end
