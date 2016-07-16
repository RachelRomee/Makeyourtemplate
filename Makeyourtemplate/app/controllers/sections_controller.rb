class SectionsController < ApplicationController

	# to show the template view
		def index
			@sections = Section.order(id: :asc)
		end


	# to update the database with the user input
		def update
			@section = Section.find_by section_name: params[:section_name]
			@section.css_rules = params[:section][:css_rules]

			if @section.save
				redirect_to action: :index
			else
				render 'index'
			end
		end
		# respond to json

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
