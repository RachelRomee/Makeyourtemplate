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
			allsections = ""

			@sections.each do |section|

				allsections << section.css_rules
			end
			render text: "#{allsections}".html_safe
		end

		private

		def section_params
			params.require(:section).permit(:css_rules)
		end

end
